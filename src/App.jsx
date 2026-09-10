import { useEffect, useRef, useState } from "react";
import { PrivacyPage } from "./PrivacyPage";

const tags = ["#빨래완료", "#청소끝", "#꿀잠데이", "#정주행중"];
const benefits = [
  ["01", "집에서의 시간을 의미 있게", "평범한 하루도 기록하면 나만의 리듬이 보여요."],
  ["02", "조용한 자기확신", "활발함 대신 나다운 속도를 발견해요."],
  ["03", "비슷한 리듬과의 공감", "집에서 보내는 서로의 하루가 느슨하게 이어져요."],
  ["04", "더 나은 나로 가는 여정", "작은 기록이 내일의 집 생활을 바꿔요."],
];

const guideContent = {
  signup: {
    eyebrow: "JOIN MUPPIN",
    title: "회원가입 안내",
    body: <><p>Muppin 앱에서 이메일과 닉네임으로 가입할 수 있어요.</p><ol><li>앱에서 회원가입을 선택해요.</li><li>기본 정보를 입력하고 약관에 동의해요.</li><li>첫 집 태그를 남기면 다른 집순이의 일상을 볼 수 있어요.</li></ol><p className="dialog-note">앱 다운로드 링크는 출시 시 연결할 예정이에요.</p></>,
  },
  withdraw: {
    eyebrow: "ACCOUNT",
    title: "회원탈퇴 안내",
    body: <><p>앱의 계정 설정에서 회원탈퇴를 요청할 수 있어요.</p><ol><li>마이페이지에서 설정을 열어요.</li><li>계정 관리에서 회원탈퇴를 선택해요.</li><li>안내를 확인한 뒤 탈퇴를 완료해요.</li></ol><p className="dialog-note">도움이 필요하면 문의 이메일로 연락해 주세요.</p></>,
  },
};

export function App() {
  const [guide, setGuide] = useState(null);
  const heroRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = Math.min(window.scrollY, window.innerHeight * 1.1);
      heroRef.current?.style.setProperty("--hero-shift", `${y * 0.12}px`);
      heroRef.current?.style.setProperty("--phone-shift", `${y * -0.055}px`);
    };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => { window.removeEventListener("scroll", scroll); if (frame) cancelAnimationFrame(frame); };
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    }), { threshold: 0.14 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => { if (guide) dialogRef.current?.focus(); }, [guide]);
  useEffect(() => {
    const escape = (event) => event.key === "Escape" && setGuide(null);
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, []);

  const openGuide = (key) => setGuide(guideContent[key]);

  if (window.location.pathname.replace(/\/$/, "") === "/privacy") {
    return <PrivacyPage />;
  }

  return (
    <main>
      <section className="hero" ref={heroRef} id="top">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-wash" aria-hidden="true" />
        <header className="nav shell">
          <a className="brand" href="#top" aria-label="Muppin 홈">Muppin</a>
          <nav aria-label="주요 메뉴"><a href="#about">Muppin 소개</a><a href="#rule">Muppin의 룰</a><a href="#guide">이용 안내</a><a href="#contact">문의하기</a></nav>
          <button className="pill solid" onClick={() => openGuide("signup")}>회원가입</button>
        </header>
        <div className="hero-copy shell">
          <p className="eyebrow">HOME LIFE, SHARED QUIETLY</p>
          <h1>더 나은 집순이가<br />되기까지.</h1>
          <p className="hero-sub">집에서 보내는 평범한 순간을 기록하고,<br />비슷한 생활 리듬과 조용히 연결해요.</p>
          <div className="hero-actions"><button className="pill light" onClick={() => openGuide("signup")}>Muppin 시작하기</button><a className="pill glass" href="#about">Muppin 알아보기</a></div>
        </div>
        <div className="phone" role="img" aria-label="개발 브랜치의 실제 Muppin 홈 피드 앱 화면">
          <img className="phone-base" src="/assets/muppin-phone-transparent.png" alt="" />
          <img className="phone-feed" src="/assets/muppin-phone-real-feed-v3.png" alt="" />
        </div>
        <p className="hero-caption">Muppin — 조용한 삶, 조용한 공유.</p>
      </section>

      <section className="intro section shell" id="about" data-reveal>
        <div className="intro-copy"><p className="eyebrow dark">WELCOME HOME</p><h2>집에서의 삶 전체를<br />기록해요.</h2><p className="lead">빨래, 청소, 넷플릭스, 꿀잠. 평범한 일상에도 나만의 리듬과 태도가 있어요.</p><p>누가 더 활발한지보다, 누가 더 자기답게 집을 살아가는지가 중요해요. 가볍게 기록하고, 비슷한 하루를 보내는 사람들과 조용히 연결돼 보세요.</p><div className="tags" aria-label="집 태그 예시">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
        <div className="life-gallery" aria-label="Muppin에 기록하는 집에서의 순간들">
          <figure className="life-photo life-photo-wide"><img src="/assets/editorial-bedroom-v2.png" alt="따뜻한 햇살이 드는 크림색 침실" /><figcaption>#꿀잠데이</figcaption></figure>
          <figure className="life-photo"><img src="/assets/editorial-laundry-v2.png" alt="햇살 아래 포근한 니트가 담긴 라탄 세탁 바구니" /><figcaption>#빨래완료</figcaption></figure>
          <figure className="life-photo"><img src="/assets/editorial-laptop-v2.png" alt="침대 위 노트북과 책, 따뜻한 차가 있는 휴식 시간" /><figcaption>#정주행중</figcaption></figure>
        </div>
      </section>

      <section className="rule section" id="rule"><div className="shell rule-card" data-reveal>
        <div className="rule-grid"><div><p className="eyebrow dark">OUR RULE</p><h2>하나의 기록이,<br />연결의 시작.</h2></div>
        <div className="rule-copy"><p className="quote">“집순이지만,<br />소통은 하고 싶어요.”</p><p>다른 사람의 프로필을 보려면 최소 한 개 이상의 집 태그 게시물이 필요해요.</p><span>“나도 집에서 이렇게 살아”라는 서로의 일상 인증 문화예요.</span></div></div>
        <figure className="rule-photo"><img src="/assets/editorial-note-v2.png" alt="햇살 아래 꽃과 빈 메모 카드가 놓인 나무 테이블" /><figcaption>서로의 평범한 하루가<br />조금 더 특별해지는 곳.</figcaption></figure>
      </div></section>

      <section className="benefits section shell" data-reveal>
        <p className="eyebrow dark">WHY MUPPIN</p><h2>집에 있는 나도,<br />분명히 살아가고 있으니까.</h2>
        <div className="benefit-grid">{benefits.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="guide section" id="guide"><div className="shell" data-reveal>
        <p className="eyebrow dark">QUICK GUIDE</p><h2>필요한 안내를<br />바로 찾아보세요.</h2>
        <div className="guide-list"><button onClick={() => openGuide("signup")}><span>회원가입 안내</span><small>Muppin을 처음 시작하는 방법</small></button><button onClick={() => openGuide("withdraw")}><span>회원탈퇴 안내</span><small>계정을 정리하는 방법</small></button><a href="/privacy"><span>개인정보처리방침</span><small>개인정보 처리 기준 확인</small></a></div>
      </div></section>

      <section className="contact section shell" id="contact" data-reveal>
        <div><p className="eyebrow dark">CONTACT</p><h2>무엇을<br />도와드릴까요?</h2></div>
        <div className="contact-box"><p>궁금한 점이나 도움이 필요한 순간,<br />편하게 메일을 남겨주세요.</p><a className="email" href="mailto:treka0723@kakao.com">treka0723@kakao.com</a><a className="pill solid mail" href="mailto:treka0723@kakao.com?subject=Muppin%20문의">이메일로 문의하기</a></div>
      </section>

      <footer className="footer shell"><a className="brand" href="#top">Muppin</a><p>더 나은 집순이가 되기까지.</p><div><button onClick={() => openGuide("signup")}>회원가입</button><button onClick={() => openGuide("withdraw")}>회원탈퇴</button><a href="/privacy">개인정보처리방침</a></div></footer>

      {guide && <div className="dialog-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setGuide(null)}><section className="dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title" tabIndex="-1" ref={dialogRef}><button className="dialog-close" onClick={() => setGuide(null)} aria-label="닫기">닫기</button><p className="eyebrow dark">{guide.eyebrow}</p><h2 id="dialog-title">{guide.title}</h2><div className="dialog-body">{guide.body}</div></section></div>}
    </main>
  );
}
