import fs from 'node:fs';
import { Readable } from 'node:stream';
import type { ReadableStream } from 'node:stream/web';
import sharp from 'sharp';

interface DownloadImageOptions {
  createSmallVersion?: boolean;
  quality?: number;
  maxSizeKB?: number;
}

export async function downloadImage(
  url: string,
  filepath: string,
  options: DownloadImageOptions = {},
): Promise<string> {
  const { createSmallVersion = false, quality = 85, maxSizeKB = 280 } = options;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  if (!response.body) {
    throw new Error('Response body is empty');
  }

  const webpFilepath = filepath.replace(/\.[^.]+$/, '.webp');
  const smallWebpFilepath = filepath.replace(/\.[^.]+$/, '-small.webp');

  return new Promise((resolve, reject) => {
    const stream = Readable.fromWeb(
      response.body as unknown as ReadableStream<Uint8Array>,
    );

    const chunks: Uint8Array[] = [];

    stream.on('data', (chunk) => {
      chunks.push(chunk);
    });

    stream.on('error', (err) => {
      reject(err);
    });

    stream.on('end', async () => {
      try {
        const buffer = Buffer.concat(chunks);

        // Imagen principal - mantiene proporciones originales
        let currentQuality = quality;
        let imageBuffer: Buffer;

        do {
          imageBuffer = await sharp(buffer)
            .webp({
              quality: currentQuality,
              effort: 6,
            })
            .toBuffer();

          currentQuality -= 5;
        } while (imageBuffer.length > maxSizeKB * 1024 && currentQuality > 60);

        await fs.promises.writeFile(webpFilepath, imageBuffer);

        // Versión pequeña para WhatsApp (opcional)
        if (createSmallVersion) {
          const smallBuffer = await sharp(buffer)
            .webp({
              quality: 80,
              effort: 6,
            })
            .toBuffer();

          await fs.promises.writeFile(smallWebpFilepath, smallBuffer);
        }

        const sizeKB = (imageBuffer.length / 1024).toFixed(2);
        resolve(
          `${webpFilepath.split('/').pop()} (${sizeKB}KB) was downloaded and optimized successfully.`,
        );
      } catch (err) {
        reject(err);
      }
    });
  });
}
