import Image from "next/image"

export default function AboutMe() {
  return (
    <div className="about-container">
      <section className="profile-image">
        <Image src="/images/geass.png" alt="Your Photo" className="profile-photo" width={200} height={200} />
      </section>

      <section className="basic">
        <h3 className="profile-text">Hello, I'm Niranjhan SU</h3>
        <p className="profile-text">Just a student at Shiv Nadar Univeristy Chennai studying Computer Science.</p>
      </section>

      <section className="hobbies">
        <h3>Hobbies and Interests</h3>
        <p>
          My main interests are Anime, Computer Science and books including novels, webnovels and light novels. Im ready
          to chat about them anytime of the day.
        </p>
        <p>Other things I like are coffee and cooking</p>
      </section>

      <section className="skills">
        <h3>Some Things I have Learnt and Done</h3>
        <ul>
          <li>Programming in C, C++, Python, Java</li>
          <li>Web, Game and Software development</li>
          <li>
            Watching a lot of anime.{" "}
            <a href="https://anilist.co/user/DrunkenCloud/" target="_blank" rel="noopener noreferrer">
              [my Anilist]
            </a>
          </li>
          <li>Reading a lot of books</li>
        </ul>
      </section>

      <section className="experience">
        <h3>Some Experiences of Mine</h3>
        <p>To be honest there is not much for me (the lack of first position is blinding) to say but here goes: </p>
        <ul>
          <li>
            You can see my TryHackMe and CTFTime profile through this{" "}
            <a href="https://linktr.ee/drunkencloud" target="_blank" rel="noopener noreferrer">
              linktree
            </a>
          </li>
          <li>2nd at Enigma Quest CTF organised at SSN on 1st March 2024</li>
          <li>12th at Nexus CTF organised by YCF CTF team on April 20 2024</li>
          <li>3rd at Password CTF organised at VITC on 29th January 2024</li>
        </ul>
      </section>

      <section className="contact">
        <h3>Contact Me</h3>
        <p>
          You can reach me at{" "}
          <a href="mailto:niranjhansu@gmail.com" target="_blank" rel="noopener noreferrer">
            niranjhansu@gmail.com
          </a>
        </p>
        <p>
          Follow me on{" "}
          <a href="https://twitter.com/drunkencloud99" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          ,{" "}
          <a href="https://www.instagram.com/drunkencloud99/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>{" "}
          and{" "}
          <a href="https://www.linkedin.com/in/niranjhan-su/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{" "}
          or hit me up @drunkencloud on discord.
        </p>
      </section>
    </div>
  )
}

