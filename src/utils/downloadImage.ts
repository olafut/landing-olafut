'use server';
import fs from 'node:fs';
import { Readable } from 'node:stream';
import type { ReadableStream } from 'node:stream/web';

export async function downloadImage(
  url: string,
  filepath: string,
): Promise<string> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  if (!response.body) {
    throw new Error('Response body is empty');
  }

  const dest = fs.createWriteStream(filepath);

  return new Promise((resolve, reject) => {
    const stream = Readable.fromWeb(
      response.body as unknown as ReadableStream<Uint8Array>,
    );

    stream.pipe(dest);

    stream.on('error', (err) => {
      dest.close();
      reject(err);
    });

    dest.on('error', (err) => {
      reject(err);
    });

    dest.on('finish', () => {
      resolve(`${filepath.split('/').pop()} was downloaded successfully.`);
    });
  });
}
