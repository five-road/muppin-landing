import { useEffect } from "react";

const sections = [
  ["overview", "1. 개인정보의 처리 목적"],
  ["items", "2. 처리 항목·근거·보유기간"],
  ["source", "3. 개인정보의 수집 출처"],
  ["sharing", "4. 제3자 제공"],
  ["outsourcing", "5. 처리위탁 및 국외 이전"],
  ["public", "6. 게시물 공개와 민감정보"],
  ["destroy", "7. 개인정보의 파기"],
  ["rights", "8. 이용자의 권리"],
  ["children", "9. 만 14세 미만 아동"],
  ["device", "10. 기기 권한과 자동 수집"],
  ["security", "11. 안전성 확보조치"],
  ["officer", "12. 개인정보 보호 담당"],
  ["remedy", "13. 권익침해 구제방법"],
  ["change", "14. 방침 변경"],
];

export function PrivacyPage() {
  useEffect(() => {
    document.title = "개인정보처리방침 | Muppin";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="privacy-page">
      <header className="privacy-nav shell">
        <a className="brand brand-dark" href="/" aria-label="Muppin 랜딩페이지"><img src="/assets/muppin-icon.png" alt="" /><span><img className="brand-wordmark" src="/assets/muppin-wordmark.png" alt="Muppin" /></span></a>
        <a className="privacy-back" href="/">홈으로 돌아가기</a>
      </header>

      <section className="privacy-hero">
        <div className="shell privacy-hero-grid">
          <div>
            <p className="eyebrow dark">PRIVACY POLICY</p>
            <h1>개인정보처리방침</h1>
            <p className="privacy-intro">
              Muppin은 집에서의 일상을 안심하고 기록할 수 있도록 개인정보를 필요한 범위에서만
              처리하고, 이용자가 자신의 정보를 이해하고 통제할 수 있게 합니다.
            </p>
            <div className="privacy-meta"><span>시행일 2026. 9. 10.</span><span>버전 1.0</span></div>
          </div>
          <div className="privacy-summary" aria-label="개인정보 처리 요약">
            <article><strong>서비스</strong><span>Muppin 홈 라이프 플랫폼</span></article>
            <article><strong>가입 연령</strong><span>만 14세 이상</span></article>
            <article><strong>문의</strong><a href="mailto:treka0723@kakao.com">treka0723@kakao.com</a></article>
            <article><strong>계정 삭제</strong><a href="/delete-account">회원탈퇴 안내에서 요청</a></article>
          </div>
        </div>
      </section>

      <div className="shell privacy-layout">
        <aside className="privacy-toc" aria-label="개인정보처리방침 목차">
          <p>목차</p>
          <nav>{sections.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}</nav>
        </aside>

        <article className="privacy-document">
          <div className="privacy-notice">
            <strong>적용 범위</strong>
            <p>이 방침은 모바일 앱 Muppin과 관련 고객지원에 적용됩니다.</p>
          </div>

          <section id="overview">
            <p className="privacy-number">01</p><h2>개인정보의 처리 목적</h2>
            <p>Muppin(이하 “운영자”)은 다음 목적에 필요한 최소한의 개인정보를 처리합니다. 목적이 변경되는 경우 관련 법령에 따라 별도 동의를 받거나 필요한 조치를 합니다.</p>
            <ul>
              <li>Google·Kakao 소셜 로그인, 회원 식별, 가입 의사 확인과 계정 관리</li>
              <li>프로필, 게시물, 집 태그, 댓글, 좋아요, 저장, 팔로우와 컬렉션 기능 제공</li>
              <li>알림 전송, 문의 응대, 신고·차단 처리와 서비스 안전 유지</li>
              <li>부정 이용 방지, 오류 대응, 서비스 품질과 보안 개선</li>
              <li>선택적으로 동의한 이용자에 대한 서비스 소식과 마케팅 정보 제공</li>
            </ul>
          </section>

          <section id="items">
            <p className="privacy-number">02</p><h2>처리 항목·법적 근거·보유기간</h2>
            <p>동의를 받아 처리하는 정보와 서비스 계약의 이행 또는 정당한 이익을 위해 처리하는 정보를 구분합니다.</p>
            <div className="privacy-table-wrap"><table>
              <thead><tr><th>구분</th><th>처리 항목</th><th>목적·법적 근거</th><th>보유기간</th></tr></thead>
              <tbody>
                <tr><td>회원가입·로그인</td><td>소셜 로그인 제공자, 제공자 계정 식별값, 이메일, 이름, 프로필 이미지, 닉네임, 생년월일, 성별, 약관 동의 기록</td><td>가입 동의 및 회원계약 이행<br />개인정보 보호법 제15조 제1항 제1호·제4호</td><td>회원 탈퇴 시까지</td></tr>
                <tr><td>프로필·커뮤니티</td><td>프로필·배경 이미지, 소개글, 게시물 본문, 사진·영상, 태그·카테고리, 공개 범위, 댓글, 좋아요, 저장, 팔로우, 컬렉션과 활동 기록</td><td>이용자가 요청한 커뮤니티 기능 제공<br />법 제15조 제1항 제4호</td><td>삭제 또는 회원 탈퇴 시까지</td></tr>
                <tr><td>문의·신고·차단</td><td>문의 제목·내용·분류·첨부파일, 답변 내역, 신고 대상·사유·상세 내용, 차단 관계</td><td>문의 처리, 이용자 보호, 분쟁 대응과 서비스 안전<br />법 제15조 제1항 제4호·제6호</td><td>문의 종결 후 1년, 신고 처리 종결 후 3년</td></tr>
                <tr><td>푸시 알림</td><td>기기 식별자, FCM 등록 토큰, 운영체제·플랫폼, 알림 수신·이동 정보</td><td>댓글·팔로우·뱃지 등 알림 제공<br />법 제15조 제1항 제4호</td><td>로그아웃·탈퇴·토큰 폐기 시까지</td></tr>
                <tr><td>서비스 보안</td><td>접속 일시, IP 주소, 요청·오류 기록, 앱·기기 환경 정보</td><td>부정 이용 방지, 장애 분석과 보안 유지<br />법 제15조 제1항 제6호</td><td>원칙적으로 3개월</td></tr>
                <tr><td>마케팅(선택)</td><td>회원 식별값, 이메일 또는 알림 토큰, 수신 동의 기록</td><td>서비스 소식과 이벤트 안내<br />법 제15조 제1항 제1호</td><td>동의 철회 또는 회원 탈퇴 시까지</td></tr>
              </tbody>
            </table></div>
            <p className="privacy-caption">관계 법령에 따라 보존할 의무가 있는 경우에는 해당 법령이 정한 기간 동안 별도로 분리하여 보관한 뒤 파기합니다.</p>
          </section>

          <section id="source">
            <p className="privacy-number">03</p><h2>개인정보의 수집 출처</h2>
            <p>이용자가 Google 또는 Kakao 로그인을 선택하면 해당 로그인 제공자로부터 이용자가 동의한 범위의 계정 식별값, 이메일, 이름, 프로필 이미지 등을 제공받을 수 있습니다. 생년월일·성별·닉네임 등 가입에 필요한 정보가 제공되지 않으면 Muppin에서 이용자가 직접 입력합니다.</p>
          </section>

          <section id="sharing">
            <p className="privacy-number">04</p><h2>개인정보의 제3자 제공</h2>
            <p>운영자는 이용자의 개인정보를 위 처리 목적 범위에서 이용하며, 원칙적으로 제3자에게 제공하지 않습니다. 다만 이용자가 사전에 동의했거나 법률에 특별한 규정이 있는 경우, 수사기관이 적법한 절차에 따라 요청한 경우에는 필요한 범위에서 제공할 수 있습니다.</p>
          </section>

          <section id="outsourcing">
            <p className="privacy-number">05</p><h2>개인정보 처리위탁 및 국외 이전</h2>
            <p>로그인과 푸시 알림 기능을 위해 아래 외부 서비스를 사용합니다. 운영자는 관련 계약과 서비스 설정을 통해 개인정보가 안전하게 처리되도록 관리합니다.</p>
            <div className="privacy-table-wrap"><table>
              <thead><tr><th>업체·국가</th><th>업무와 이전 목적</th><th>이전 항목</th><th>방법·시점</th><th>보유기간</th></tr></thead>
              <tbody>
                <tr><td>Google LLC<br />미국</td><td>Google 로그인 인증, Firebase Cloud Messaging 푸시 알림</td><td>Google 계정 인증정보, 제공 동의한 계정정보, 기기 식별자, FCM 토큰, 플랫폼, 알림 전송정보</td><td>로그인·토큰 등록·알림 전송 시 암호화된 네트워크로 이전</td><td>회원 탈퇴, 기능 해지 또는 관련 서비스 계약 종료 시까지</td></tr>
                <tr><td>주식회사 카카오<br />대한민국</td><td>Kakao 로그인 인증</td><td>Kakao 계정 인증정보와 이용자가 제공에 동의한 계정정보</td><td>로그인 시 암호화된 네트워크로 처리</td><td>회원 탈퇴 또는 관련 서비스 계약 종료 시까지</td></tr>
              </tbody>
            </table></div>
            <p>국외 이전을 원하지 않으면 Google 로그인을 사용하지 않고 Kakao 로그인을 선택할 수 있습니다. 푸시 알림은 기기 설정에서 거부할 수 있으나, 이 경우 댓글·팔로우 등의 실시간 알림을 받지 못할 수 있습니다.</p>
          </section>

          <section id="public">
            <p className="privacy-number">06</p><h2>게시물 공개와 민감정보</h2>
            <p>Muppin은 건강, 사상·신념, 정치적 견해 등 민감정보를 가입정보로 요구하지 않습니다. 다만 이용자가 게시물·사진·댓글에 자신이나 다른 사람의 민감정보를 직접 포함하면 선택한 공개 범위에 따라 다른 이용자에게 공개될 수 있습니다.</p>
            <ul>
              <li>게시물 공개 범위는 전체 공개, 팔로워 공개 또는 비공개 중 선택할 수 있습니다.</li>
              <li>민감정보나 타인의 개인정보가 포함된 콘텐츠는 게시하지 않는 것을 권장합니다.</li>
              <li>작성한 콘텐츠는 앱에서 수정·삭제하거나 공개 범위를 변경할 수 있습니다.</li>
            </ul>
          </section>

          <section id="destroy">
            <p className="privacy-number">07</p><h2>개인정보의 파기</h2>
            <p>보유기간이 끝나거나 처리 목적이 달성되면 해당 개인정보를 지체 없이 파기합니다. 법령에 따라 보존해야 하는 정보는 다른 정보와 분리하여 보관합니다.</p>
            <ul>
              <li>전자 파일: 복구하거나 재생할 수 없는 방법으로 안전하게 삭제</li>
              <li>종이 문서가 발생하는 경우: 분쇄 또는 소각</li>
              <li>회원 탈퇴: 계정과 연결된 개인정보를 삭제하고 기기의 인증·알림 토큰을 폐기</li>
            </ul>
          </section>

          <section id="rights">
            <p className="privacy-number">08</p><h2>이용자와 법정대리인의 권리·행사방법</h2>
            <p>이용자는 자신의 개인정보에 대해 열람, 전송, 정정·삭제, 처리정지, 동의 철회 및 회원 탈퇴를 요구할 수 있습니다.</p>
            <ul>
              <li>프로필·게시물: 앱의 마이페이지 및 각 콘텐츠 메뉴에서 직접 수정·삭제</li>
              <li>알림: 기기 설정에서 권한 철회</li>
              <li>마케팅: 앱 설정 또는 문의 이메일을 통해 동의 철회</li>
              <li>회원 탈퇴: 앱의 설정 또는 <a href="/delete-account">회원탈퇴 안내 페이지</a>에서 요청</li>
              <li>그 밖의 권리 행사: <a href="mailto:treka0723@kakao.com">treka0723@kakao.com</a>으로 요청</li>
            </ul>
            <p>권리 행사는 대리인을 통해서도 할 수 있으며, 운영자는 요청자가 본인 또는 정당한 대리인인지 확인할 수 있습니다. 법령이 정한 사유가 있는 경우 요청이 제한될 수 있으며 그 사유를 안내합니다.</p>
          </section>

          <section id="children">
            <p className="privacy-number">09</p><h2>만 14세 미만 아동의 개인정보</h2>
            <p>Muppin은 만 14세 이상 이용자를 대상으로 하며, 가입 과정에서 생년월일을 확인합니다. 만 14세 미만 아동의 개인정보가 수집된 사실을 알게 되면 해당 계정을 제한하고 개인정보를 지체 없이 삭제합니다.</p>
          </section>

          <section id="device">
            <p className="privacy-number">10</p><h2>기기 권한과 자동 수집</h2>
            <div className="privacy-table-wrap"><table>
              <thead><tr><th>권한·정보</th><th>이용 목적</th><th>거부 방법과 영향</th></tr></thead>
              <tbody>
                <tr><td>카메라</td><td>게시물에 올릴 사진 촬영</td><td>기기 설정에서 거부 가능하며 촬영 기능만 제한됩니다.</td></tr>
                <tr><td>사진·미디어 보관함</td><td>이용자가 선택한 사진·영상 첨부</td><td>거부하면 보관함의 미디어를 첨부할 수 없습니다. 선택하지 않은 파일은 서버로 전송하지 않습니다.</td></tr>
                <tr><td>알림</td><td>댓글, 팔로우, 뱃지 등 푸시 알림</td><td>기기 설정에서 언제든 거부할 수 있으며 서비스의 핵심 기능은 계속 이용할 수 있습니다.</td></tr>
                <tr><td>접속·기기 정보</td><td>보안, 인증 유지, 오류 대응</td><td>서비스 이용 과정에서 자동 생성될 수 있습니다.</td></tr>
              </tbody>
            </table></div>
            <p>Muppin 웹사이트는 맞춤형 광고를 위한 쿠키나 추적기를 사용하지 않습니다. Muppin은 이용자에게 법적 효과나 중대한 영향을 주는 완전 자동화된 결정을 하지 않습니다. 향후 자동 수집 기술이나 자동화된 결정 기능을 추가하는 경우 그 기준, 처리 방식과 거부 방법을 이 방침에 공개합니다.</p>
          </section>

          <section id="security">
            <p className="privacy-number">11</p><h2>개인정보의 안전성 확보조치</h2>
            <ul>
              <li>인증 토큰의 기기 보안 저장소 보관과 전송 구간 암호화</li>
              <li>개인정보 접근 권한의 최소화와 접근 통제</li>
              <li>접속기록 보관, 위·변조 방지와 보안 취약점 점검</li>
              <li>처리 목적이 끝난 개인정보의 분리 보관과 안전한 파기</li>
              <li>개인정보 처리 수탁자에 대한 계약·관리·감독</li>
            </ul>
          </section>

          <section id="officer">
            <p className="privacy-number">12</p><h2>개인정보 보호 담당</h2>
            <div className="privacy-contact-card">
              <div><span>개인정보처리자</span><strong>Muppin 운영자</strong></div>
              <div><span>담당 부서</span><strong>Muppin 운영팀</strong></div>
              <div><span>전자우편</span><a href="mailto:treka0723@kakao.com">treka0723@kakao.com</a></div>
            </div>
            <p>개인정보 관련 문의, 불만 처리, 피해 구제 및 열람 등 요구는 위 연락처로 접수할 수 있습니다.</p>
          </section>

          <section id="remedy">
            <p className="privacy-number">13</p><h2>권익침해 구제방법</h2>
            <p>개인정보 침해에 대한 상담이나 구제가 더 필요한 경우 아래 기관에 문의할 수 있습니다.</p>
            <ul className="privacy-links">
              <li><a href="https://privacy.kisa.or.kr" target="_blank" rel="noreferrer">개인정보침해 신고센터</a><span>국번 없이 118</span></li>
              <li><a href="https://www.kopico.go.kr" target="_blank" rel="noreferrer">개인정보분쟁조정위원회</a><span>1833-6972</span></li>
              <li><a href="https://ecrm.police.go.kr" target="_blank" rel="noreferrer">경찰청 사이버범죄 신고시스템</a><span>국번 없이 182</span></li>
            </ul>
          </section>

          <section id="change">
            <p className="privacy-number">14</p><h2>개인정보처리방침의 변경</h2>
            <p>법령, 서비스 또는 개인정보 처리 내용이 변경되면 시행 전에 앱 또는 이 페이지를 통해 알립니다. 이용자의 권리에 중대한 변경이 있는 경우에는 최소 30일 전에 알립니다.</p>
            <div className="privacy-version"><span>공고일 2026. 9. 10.</span><span>시행일 2026. 9. 10.</span></div>
          </section>
        </article>
      </div>

      <footer className="privacy-footer"><div className="shell"><a className="brand brand-dark" href="/"><img src="/assets/muppin-icon.png" alt="" /><span><img className="brand-wordmark" src="/assets/muppin-wordmark.png" alt="Muppin" /></span></a><p><a href="/delete-account">회원탈퇴</a> · 개인정보 관련 문의 · <a href="mailto:treka0723@kakao.com">treka0723@kakao.com</a></p></div></footer>
    </main>
  );
}
