import React from 'react';

interface EmojiProps {
  code: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Emoji: React.FC<EmojiProps> = ({ code, className = '', style = {} }) => {
  const emojiUrl = `https://twemoji.maxcdn.com/v/14.0.2/72x72/${code}.png`;
  
  return (
    <img 
      src={emojiUrl} 
      alt="emoji" 
      className={`inline-block w-6 h-6 ${className}`}
      style={style}
    />
  );
};