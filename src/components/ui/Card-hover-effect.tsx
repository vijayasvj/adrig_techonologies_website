import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    link: string
    image: any // Added image property
  }[]
  className?: string
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div
      className={cn(
        `grid grid-cols-1 md:grid-cols-2 lg:${
          items.length % 2 === 0 ? "grid-cols-2" : "grid-cols-3"
        } py-10`,
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card image={item.image}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export const Card = ({
  className,
  children,
  image,
}: {
  className?: string
  children: React.ReactNode
  image: string // New image prop for Card
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white border dark:border-black/[0.8] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      {/* Render the image at the top of the card */}
      <Image
        src={image}
        alt="#niedoij"
        className="w-20 h-20 mx-auto rounded-full mb-2 object-cover"
      />
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  )
}

export const CardTitle = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <h4
      className={cn("text-slate-900 font-bold tracking-wide mt-4", className)}
    >
      {children}
    </h4>
  )
}

export const CardDescription = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-600 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  )
}
