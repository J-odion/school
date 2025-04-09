"use client"

import { useEffect, useRef } from "react"

export default function ParallaxSection({
  children,
  backgroundImage,
  overlayColor = "rgba(0, 0, 0, 0.5)",
  speed = 0.5,
}) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const scrollPosition = window.scrollY
      const sectionPosition = sectionRef.current.offsetTop
      const distance = scrollPosition - sectionPosition

      // Only apply parallax effect when the section is in view
      if (
        scrollPosition + window.innerHeight > sectionPosition &&
        scrollPosition < sectionPosition + sectionRef.current.offsetHeight
      ) {
        const yValue = distance * speed
        sectionRef.current.style.backgroundPositionY = `${yValue}px`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <section
      ref={sectionRef}
      className="section-height relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: overlayColor }} />
      <div className="relative z-10 container mx-auto px-6 py-12">{children}</div>
    </section>
  )
}
