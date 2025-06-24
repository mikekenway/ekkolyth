import {
  FaTwitch,
  FaYoutube,
  FaTiktok,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import React from 'react';

type IconName =
  | 'twitch'
  | 'youtube'
  | 'tiktok'
  | 'twitter'
  | 'instagram'
  | 'email';

const icons = {
  twitch: FaTwitch,
  youtube: FaYoutube,
  tiktok: FaTiktok,
  twitter: FaTwitter,
  instagram: FaInstagram,
  email: MdEmail,
} satisfies Record<IconName, React.ElementType>;

type SocialIconProps = {
  icon: IconName;
  href?: string;
  ariaLabel?: string;
};

export function SocialIcon({ icon, href, ariaLabel }: SocialIconProps) {
  const Icon = icons[icon];
  const Wrapper = href ? 'a' : 'div';

  return (
    <Wrapper
      href={href}
      className='bg-zinc-200 rounded-full p-3 hover:bg-indigo-200 transition-all duration-200'
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      aria-label={ariaLabel}
    >
      <Icon className='text-zinc-800 size-5' />
    </Wrapper>
  );
}
