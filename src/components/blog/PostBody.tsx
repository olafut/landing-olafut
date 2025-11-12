/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: This is needed to render markdown content */
import type { FC } from 'react';
import styles from './markdown-styles.module.css';

type PostBodyProps = {
  content: string;
};

export const PostBody: FC<PostBodyProps> = ({ content }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};
