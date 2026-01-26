/**
 * main.js - ランディングページの機能
 * スムーススクロール、モバイルメニュー開閉等の軽い挙動を実装
 */

document.addEventListener("DOMContentLoaded", function () {
  // ========================================
  // モバイルメニュー開閉
  // ========================================

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    // メニュー開閉ボタンのクリック
    menuToggle.addEventListener("click", function () {
      menuToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // ナビゲーションリンククリック時にメニューを閉じる
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", function () {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }

  // ========================================
  // ページ内スムーススクロール
  // ========================================

  // data-scroll-to 属性を持つボタンのクリック処理
  document.querySelectorAll("[data-scroll-to]").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("data-scroll-to");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // ========================================
  // フォーム送信処理（ダミー）
  // ========================================

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // フォームデータの取得
      const name = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const tel = this.querySelector('input[type="tel"]').value;
      const message = this.querySelector("textarea").value;

      // ダミーの送信処理
      console.log("フォーム送信:", {
        name: name,
        email: email,
        tel: tel,
        message: message,
      });

      // ユーザーへのフィードバック
      alert(
        "ご送信ありがとうございます！\nいただいたお問い合わせを確認いたしました。\n後ほどご連絡させていただきます。",
      );

      // フォームをリセット
      this.reset();
    });
  }

  // ========================================
  // スクロール時のアクティブナビゲーション管理
  // ========================================

  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    // アクティブ状態を更新
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("active");
      }
    });
  });

  // ========================================
  // ページ読み込み完了の通知
  // ========================================

  console.log("ランディングページが読み込まれました");
});

// ========================================
// ウィンドウリサイズ時のメニュー状態リセット
// ========================================

window.addEventListener("resize", function () {
  // タブレット以上の表示に切り替わったときメニューを閉じる
  if (window.innerWidth >= 768) {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
    }
  }
});
