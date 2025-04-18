import clsx from "clsx"
import { ReactNode } from "react"

type TypographyType = {
    children: ReactNode
    color?: string
    className?: string
}


export const H1 = ({
  children,
  color = 'black',
}: {
  children: React.ReactNode
  color?: string
}) => {
  return <h1 className={clsx("text-2xl font-bold", `text-${color}`)}>{children}</h1>
}

export const H2 = ({ children, className, color = "black" }: TypographyType) => {
  return (
    <h2 className={clsx(
      "font-bold text-xl",
      `text-${color}`,
      className
    )}>
      {children}
    </h2>
  )
}

export const H2Hero = ({ children, className, color}) => {
    return (
        <h2 className={clsx(
            "font-bold text-3xl md:text-4xl",
            `text-${color}`,
            className
        )}>{children}</h2>
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
  size = "text-base"     
}: TypographyType) => {
  return (
    <p className={clsx("text-base", `text-${color} text-${size}`)}>
      {children}
    </p>
  )
}

export const Emphasized = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-secondary text-base font-bold">{children}</span>
}
