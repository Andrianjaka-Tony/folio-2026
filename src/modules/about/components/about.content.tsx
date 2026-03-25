export function AboutContent() {
  return (
    <div className="pt-50 pl-36 flex">
      <div className="w-5/12 mr-80 flex flex-col gap-10 text-2xl tracking-tighter leading-normal">
        <p>
          Tony is a creative developer crafting bold, refined digital experiences where design and
          technology meet with precision. He blends code, motion, and interaction to build immersive
          interfaces that feel both intuitive and striking. As a Young Jury 2026 at Awwwards, he
          brings a sharp eye for detail and a deep appreciation for innovation.
        </p>
        <p>
          Working as an independent, Tony collaborates with companies, agencies, and startups
          worldwide, delivering thoughtful digital products. Passionate about continuous growth, he
          loves learning and constantly refines his craft while exploring new technologies. His work
          balances sophistication and experimentation, designed to leave a lasting impression.
        </p>
      </div>

      <div className="w-2/12 flex flex-col gap-10 text-xs tracking-tighter uppercase">
        <div className="flex flex-col">
          <img
            src="/images/about/tony.jpg"
            className="mb-2 w-full aspect-square object-cover grayscale-70 brightness-40"
          />
          <p>Andrianjaka Tony</p>
          <p>young jury 2026 — Awwwards</p>
        </div>

        <div className="flex flex-col">
          <p>Email</p>
          <p>Github</p>
          <p>Linkedin</p>
          <p>Instagram</p>
        </div>

        <div className="flex flex-col gap-4">
          <p>Services</p>
          <div>
            <p>Creative Development</p>
            <p>Motion Design</p>
            <p>WebGL Experiences</p>
            <p>Frontend Development</p>
            <p>Performance Optimization</p>
            <p>Creative Collaboration</p>
          </div>
        </div>
      </div>
    </div>
  );
}
