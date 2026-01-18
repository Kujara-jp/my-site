/**
 * Main.js - ランディングページの挙動を制御
 * スムーススクロール、フォーム検証などの小さな機能を実装
 */

// ========================================
// スムーススクロール
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // data-scroll-to 属性を持つボタンをクリック時の処理
    const scrollButtons = document.querySelectorAll('[data-scroll-to]');
    scrollButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-scroll-to');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // スムーススクロール（CSS scroll-behavior: smooth で実装）
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ナビゲーションリンクのスムーススクロール
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ========================================
// フォーム送信処理
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // フォームデータを取得
            const formData = new FormData(this);
            
            // ここではコンソール出力とアラートで確認
            // 実際の送信はバックエンド処理が必要
            console.log('フォーム送信:');
            console.log('名前:', this.querySelector('input[type="text"]').value);
            console.log('メール:', this.querySelector('input[type="email"]').value);
            console.log('メッセージ:', this.querySelector('textarea').value);
            
            // ユーザーへのフィードバック
            alert('ご送信ありがとうございます！\n内容を確認させていただき、後ほどご連絡させていただきます。');
            
            // フォームをリセット
            this.reset();
        });
    }
});

// ========================================
// ナビゲーションのアクティブ状態管理
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // スクロール時にアクティブなセクションに対応するナビゲーション項目をハイライト
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let currentSection = '';
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // ナビゲーションのアクティブ状態を更新
        navLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });
});

// ========================================
// ホバーエフェクト（追加の小さな挙動）
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
});

// ========================================
// ページロード時のアニメーション
// ========================================

window.addEventListener('load', function() {
    // ページが完全にロードされたらボディにクラスを追加
    document.body.classList.add('loaded');
    console.log('ページ読み込み完了');
});
