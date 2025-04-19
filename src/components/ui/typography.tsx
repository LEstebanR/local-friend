import clsx from 'clsx'
import { ReactNode } from 'react'

type TypographyType = {
  children: ReactNode
  color?: 'black' | 'white'
  className?: string
}

export const H1 = ({ children, color = 'black' }: TypographyType) => {
  return (
    <h1
      className={clsx('text-2xl font-bold', {
        'text-black': color === 'black',
        'text-white': color === 'white',
      })}
    >
      {children}
    </h1>
  )
}

export const H2 = ({
  children,
  className,
  color = 'black',
}: TypographyType) => {
  return (
    <h2
      className={clsx(
        'text-xl font-bold',
        {
          'text-black': color === 'black',
          'text-white': color === 'white',
        },
        className
      )}
    >
      {children}
    </h2>
  )
}

export const H2Hero = ({
  children,
  className,
  color = 'black',
}: TypographyType) => {
  return (
    <h2
      className={clsx(
        'text-3xl font-bold md:text-4xl',
        {
          'text-black': color === 'black',
          'text-white': color === 'white',
        },
        className
      )}
    >
      {children}
    </h2>
  )
}

export const H3 = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-lg font-bold">{children}</h3>
}

export const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-muted text-sm">{children}</p>
}

export const Body = ({
  children,
  color = 'black',
  className,
}: TypographyType) => {
  return (
    <p
      className={clsx(
        'text-base',
        {
          'text-black': color === 'black',
          'text-white': color === 'white',
        },
        className
      )}
    >
      {children}
    </p>
  )
}

export const Emphasized = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-secondary text-base font-bold">{children}</span>
}
