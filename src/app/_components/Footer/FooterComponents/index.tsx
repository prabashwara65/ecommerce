'use client'
import React from 'react'
import classes from './index.module.scss'
import { inclusions, noHeaderFooterUrls, profileNavItems } from '../../../constant'
import { usePathname } from 'next/navigation'
import { Gutter } from '../../Gutter'
import Image from 'next/image'
import Link from 'next/link'
import { Footer, Media } from '../../../../payload/payload-types'
import { Button } from '../../Button'


const FooterComponents = ({footer}:{footer : Footer}) => {
  const pathnames = usePathname();
  const navItems = footer?.navItems || [];
  return (
    <footer className={noHeaderFooterUrls.includes(pathnames) ? classes.hide : ''}>
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map((inclusions) => (
            <li key={inclusions.title}>
              <Image
                src={inclusions.icon}
                alt={inclusions.title}
                width={36}
                height={36}
                className={classes.icon}
              />
              <h5 className={classes.title}>
                {inclusions.title}
              </h5>
              <p >
                {inclusions.description}
              </p>
            </li>
          ))}
        </ul>
      </Gutter>
      <div className={classes.footer}>
        <Gutter>
          <div className={classes.wrap}>
            <Link href="/">
              <Image src="/logo-white.svg" alt='logo' width={170} height={50} />
            </Link>
            <p>{footer.copyright}</p>
            <div className={classes.socialLinks}>
              {navItems.map((item) => {
                const icon = item?.link?.icon as Media;

                return(
                  <Button key={item.link.label} 
                    el='link' 
                    href={item.link.url}
                    newTab={true}
                    className={classes.socialLinksItem}
                  
                  >
                   <Image 
                    src={icon?.url}
                    alt={item.link.label}
                    width={24}
                    height={24}
                    className={classes.socialIcon}
                   />
                  </Button>
                )
              })}
            </div >
          </div>
        </Gutter>
      </div>

    </footer>
  )
}

export default FooterComponents
