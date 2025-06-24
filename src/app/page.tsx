'use client';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { FaTwitch, FaTwitter, FaDiscord } from 'react-icons/fa';
import { SocialIcon } from '@/components/social-icon';

export default function LinkPage() {
  return (
    <div className='min-h-screen w-full flex items-center justify-center px-4 py-10 m-0'>
      <div className='w-full max-w-md rounded-3xl overflow-hidden shadow-xl'>
        {/* Top card area */}
        <div className='bg-zinc-950/50 px-6 pt-10 pb-6 text-center'>
          <Avatar className='w-20 h-20 mx-auto mb-4 border-3 '>
            <AvatarImage
              src='/ekko.png'
              alt='Ekkolyth avatar'
            />
            <AvatarFallback>EK</AvatarFallback>
          </Avatar>

          <h1 className='text-3xl mb-4 font-bold text-white'>Ekkolyth</h1>
          <p className='text-md text-muted-foreground mt-1'>
            Hey! I&apos;m Ekko. I stream and stuff, and you&apos;re welcome here
            &lt;3
          </p>

          <div className='mt-6 space-y-3 mb-2'>
            <Button
              variant='ghost'
              size='lg'
              className='w-full justify-center'
              asChild
            >
              <a
                href='https://www.twitch.tv/ekkolyth'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaTwitch />
                Watch Live
              </a>
            </Button>
            <Button
              variant='ghost'
              size='lg'
              className='w-full justify-center'
              asChild
            >
              <a
                href='https://twitter.com/ekkolyth'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaTwitter />
                Follow me on Twitter
              </a>
            </Button>
            <Button
              variant='ghost'
              size='lg'
              className='w-full justify-center'
              asChild
            >
              <a
                href='https://discord.gg/NyQZaYRcdj'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaDiscord />
                Join my Discord
              </a>
            </Button>
          </div>
        </div>

        {/* Social icons bar */}
        <div className='bg-white px-6 py-6 flex justify-center gap-5 text-zinc-700 text-2xl'>
          <SocialIcon
            icon='twitch'
            href='https://twitch.tv/ekkolyth'
            ariaLabel='Twitch'
          />
          <SocialIcon
            icon='youtube'
            href='https://www.youtube.com/@ekkolyth'
            ariaLabel='YouTube'
          />
          <SocialIcon
            icon='tiktok'
            href='https://www.tiktok.com/@ekkolyth'
            ariaLabel='TikTok'
          />
          <SocialIcon
            icon='twitter'
            href='https://twitter.com/ekkolyth'
            ariaLabel='Twitter'
          />
          <SocialIcon
            icon='instagram'
            href='https://www.instagram.com/ekkolyth'
            ariaLabel='Instagram'
          />
          <SocialIcon
            icon='email'
            href='mailto:hello@ekkolyth.com'
            ariaLabel='Email'
          />
        </div>
      </div>
    </div>
  );
}
