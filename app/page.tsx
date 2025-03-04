"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import AboutMe from "@/components/about"
import Projects from "@/components/projects"
import Blogs from "@/components/blogs"

export default function Home() {
  const [activeContent, setActiveContent] = useState<string>("home")
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      const mirroredX = windowWidth - e.clientX
      const mirroredY = windowHeight - e.clientY

      setCursorPosition({ x: mirroredX, y: mirroredY })
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const renderContent = () => {
    switch (activeContent) {
      case "about":
        return <AboutMe />
      case "projects":
        return <Projects />
      case "blogs":
        return <Blogs />
      default:
        return (
          <p style={{ fontSize: "2.5vh" }}>
            Welcome to my website! Its a Work In Progress but feel free to look around. Click on the links above to know
            more. Oh and I hope you like the cursor :). Your cursor is just hidden, you can see it if you hover over a
            link or clickable item like the clouds above.
          </p>
        )
    }
  }

  return (
    <div className="container">
      <div
        className="custom-cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />

      <div className="header">
        <h1 className="yuji-mai-regular">Niranjhan SU</h1>
        <nav>
          <ul>
            <li>
              <a
                href="#"
                className="yuji-mai-regular"
                onClick={(e) => {
                  e.preventDefault()
                  setActiveContent("about")
                }}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#"
                className="yuji-mai-regular"
                onClick={(e) => {
                  e.preventDefault()
                  setActiveContent("projects")
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="yuji-mai-regular"
                onClick={(e) => {
                  e.preventDefault()
                  setActiveContent("blogs")
                }}
              >
                Blogs
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main className="content-container">
        <div className="intro">
          <div className="circle">
            <div className="circle-content">
              <div className="circle-item">
                <p className="yuji-mai-regular-1">Just a Guy who :</p>
              </div>
              <div className="circle-item cinzel">
                <div className="line">
                  <div className="emoji">
                    <Image src="/images/coffee.png" alt="Coffee" className="emoji-img" width={40} height={40} />
                  </div>
                  <div className="text">Watches Anime.</div>
                </div>
                <div className="line">
                  <div className="emoji">
                    <Image src="/images/coffee.png" alt="Coffee" className="emoji-img" width={40} height={40} />
                  </div>
                  <div className="text">Likes Drinking Coffee.</div>
                </div>
                <div className="line">
                  <div className="emoji">
                    <Image src="/images/coffee.png" alt="Coffee" className="emoji-img" width={40} height={40} />
                  </div>
                  <div className="text">Enjoys a bit of walking.</div>
                </div>
              </div>
              <div className="circle-item">
                <div className="image-container">
                  <div className="cat-text liu-jian-mao-cao-regular">P.S I love Reading</div>
                  <Image src="/images/book.png" alt="Book" width={100} height={100} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="content sora">
          <div id="dynamic-content">{renderContent()}</div>
        </section>
      </main>
    </div>
  )
}