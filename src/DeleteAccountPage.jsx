import { useEffect } from "react";

const email = "treka0723@kakao.com";
const subject = "Muppin 회원탈퇴 요청";
const body = `안녕하세요. Muppin 회원탈퇴를 요청합니다.

가입한 소셜 로그인: [Google / Kakao]
가입 이메일:
Muppin 닉네임:

요청 내용: 회원 계정 및 연결 데이터 삭제

본인 확인을 위해 필요한 추가 정보가 있다면 이 이메일로 안내해 주세요.`;
const deletionEmailHref = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export function DeleteAccountPage() {
  useEffect(() => {
    document.title = "회원탈퇴 안내 | Muppin";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="delete-page">
      <header className="privacy-nav shell">
        <a className="brand brand-dark" href="/" aria-label="Muppin 랜딩페이지"><img src="/assets/muppin-icon.png" alt="" /><span><img className="brand-wordmark" src="/assets/muppin-wordmark.png" alt="Muppin" /></span></a>
        <a className="privacy-back" href="/">홈으로 돌아가기</a>
      </header>

      <section className="delete-hero">
        <div className="shell delete-hero-grid">
          <div className="delete-hero-copy">
            <p className="eyebrow dark">DELETE YOUR ACCOUNT</p>
            <h1>회원탈퇴를<br />도와드릴게요.</h1>
            <p>아래 버튼을 누르면 탈퇴 요청에 필요한 항목이 입력된 이메일이 열립니다. 가입한 계정 정보를 적어 보내주세요.</p>
          </div>
          <div className="delete-request-card">
            <img src="/assets/muppin-icon.png" alt="" />
            <p>탈퇴 요청 이메일</p>
            <a className="delete-email" href={`mailto:${email}`}>{email}</a>
            <a className="pill solid delete-cta" href={deletionEmailHref}>이메일로 탈퇴 요청하기</a>
            <small>메일 앱이 열리지 않으면 위 주소로 직접 보내주세요.</small>
          </div>
        </div>
      </section>

      <section className="delete-content shell">
        <div className="delete-lead">
          <p className="eyebrow dark">HOW IT WORKS</p>
          <h2>요청부터 삭제까지</h2>
          <p>요청을 받으면 계정 소유자 확인 후 계정과 연결된 데이터를 삭제하고, 처리 결과를 회신합니다.</p>
        </div>
        <ol className="delete-steps">
          <li><span>01</span><h3>이메일 작성</h3><p>버튼을 눌러 탈퇴 요청 메일을 열어요.</p></li>
          <li><span>02</span><h3>계정 정보 입력</h3><p>로그인 방식, 가입 이메일, 닉네임을 적어요.</p></li>
          <li><span>03</span><h3>본인 확인</h3><p>필요한 경우 계정 확인을 위한 안내를 드려요.</p></li>
          <li><span>04</span><h3>삭제 완료</h3><p>처리 후 요청을 보낸 이메일로 결과를 알려드려요.</p></li>
        </ol>

        <div className="delete-data-grid">
          <article>
            <p className="eyebrow dark">DELETED DATA</p>
            <h2>삭제되는 정보</h2>
            <ul>
              <li>계정, 로그인 연결 정보와 프로필</li>
              <li>게시물, 사진·영상, 댓글과 활동 기록</li>
              <li>팔로우, 좋아요, 저장 등 관계 정보</li>
              <li>알림 토큰과 계정에 연결된 서비스 데이터</li>
            </ul>
          </article>
          <article>
            <p className="eyebrow dark">RETENTION</p>
            <h2>일부 정보의 보관</h2>
            <p>법령 준수, 분쟁 처리, 부정 이용 방지를 위해 필요한 정보는 개인정보처리방침에 안내된 기간 동안 다른 정보와 분리해 보관한 뒤 안전하게 파기합니다.</p>
            <a href="/privacy">개인정보처리방침 확인하기</a>
          </article>
        </div>

        <div className="delete-note">
          <strong>앱에서도 요청할 수 있어요.</strong>
          <p>Muppin 앱의 마이페이지 → 설정 → 계정 관리 → 회원탈퇴에서 요청할 수 있습니다. 문의가 있으면 <a href={`mailto:${email}`}>{email}</a>으로 연락해 주세요.</p>
        </div>
      </section>

      <footer className="privacy-footer"><div className="shell"><a className="brand brand-dark" href="/"><img src="/assets/muppin-icon.png" alt="" /><span><img className="brand-wordmark" src="/assets/muppin-wordmark.png" alt="Muppin" /></span></a><p><a href="/privacy">개인정보처리방침</a> · <a href={`mailto:${email}`}>문의하기</a></p></div></footer>
    </main>
  );
}
