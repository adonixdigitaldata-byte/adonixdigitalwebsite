import { blogPosts } from './blogData.js';

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');

  const postHero = document.getElementById('post-hero');
  const postContent = document.getElementById('post-content');
  const relatedGrid = document.getElementById('related-grid');

  const post = blogPosts.find(p => p.slug === slug);

  function getCategoryColor(category) {
    if (category === 'Company News') return '#facc15';
    if (category === 'AI & Automation') return '#22d3ee';
    return '#888';
  }

  // Determine related posts once so they don't randomize on language change
  let relatedPosts = [];
  if (post && relatedGrid) {
    const otherPosts = blogPosts.filter(p => p.id !== post.id);
    relatedPosts = otherPosts.sort(() => 0.5 - Math.random()).slice(0, 3);
  }

  function renderPost() {
    if (!post) {
      if (postHero) postHero.innerHTML = '<h1 style="color:white;">Post Not Found</h1><a href="blog.html" style="color:#22d3ee; margin-top:2rem;">&larr; Back to Blog</a>';
      return;
    }

    const catColor = getCategoryColor(post.category);
    const lang = document.documentElement.lang || 'en';
    const getField = (obj, field) => obj[`${field}_${lang}`] || obj[field];

    if (postHero) {
      postHero.innerHTML = `
        <div style="background-image: url('${post.image}'); background-size: cover; background-position: center; background-repeat: no-repeat; border-radius: 20px; width: 100%; min-height: 400px; margin-bottom: 2rem; position: relative; box-shadow: 0 10px 30px rgba(0,0,0,0.5); display: flex; flex-direction: column; justify-content: flex-end;">
           <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%); border-radius: 20px; z-index: 1;"></div>
           <div style="position: relative; z-index: 2; padding: 3rem 2rem; display: flex; flex-direction: column; align-items: center;">
              <div class="badge fade-in" style="margin-bottom: 1rem; border-color: ${catColor}; color: ${catColor}; box-shadow: none;">${getField(post, 'category')}</div>
              <h1 class="main-headline fade-in" style="font-size: clamp(2rem, 5vw, 3.5rem); text-align: center; margin-bottom: 1.5rem; text-shadow: 0 4px 20px rgba(0,0,0,0.8); max-width: 900px; line-height: 1.2;">${getField(post, 'title')}</h1>
              <div class="fade-in" style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 1rem; font-size: 1rem; color: rgba(255,255,255,0.8);">
                <span>${getField(post, 'author')}</span> <span style="color: rgba(255,255,255,0.4);">&bull;</span> <span>${getField(post, 'date')}</span> <span style="color: rgba(255,255,255,0.4);">&bull;</span> <span>${getField(post, 'readTime')}</span>
              </div>
           </div>
        </div>
      `;
    }

    if (postContent) {
      postContent.innerHTML = getField(post, 'content');
      
      // Simple styling adjustments for content
      const headings = postContent.querySelectorAll('h3');
      headings.forEach(h => {
        h.style.color = 'white';
        h.style.marginTop = '2.5rem';
        h.style.marginBottom = '1rem';
        h.style.fontSize = '1.8rem';
      });
      const paragraphs = postContent.querySelectorAll('p');
      paragraphs.forEach(p => {
        p.style.marginBottom = '1.5rem';
        p.style.fontSize = '1.1rem';
      });
      const lists = postContent.querySelectorAll('ul, ol');
      lists.forEach(l => {
        l.style.marginBottom = '1.5rem';
        l.style.paddingLeft = '1.5rem';
        l.style.fontSize = '1.1rem';
      });
      const listItems = postContent.querySelectorAll('li');
      listItems.forEach(li => {
        li.style.marginBottom = '0.5rem';
      });
    }

    if (relatedGrid) {
      relatedGrid.innerHTML = '';
      relatedPosts.forEach(rp => {
        const rpColor = getCategoryColor(rp.category);
        const card = document.createElement('a');
        card.href = `blog-post.html?slug=${rp.slug}`;
        card.style.textDecoration = 'none';
        card.innerHTML = `
          <div class="glass" style="display: flex; flex-direction: column; height: 100%; padding: 1.5rem; border-radius: 20px; transition: all 0.3s ease; border-top: 2px solid ${rpColor};" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 30px rgba(0,0,0,0.5)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
            <div style="background: url('${rp.image}') center/cover no-repeat; border-radius: 15px; height: 150px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; position: relative;">
               <div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(0,0,0,0.2), rgba(0,0,0,0.7)); border-radius: 15px;"></div>
            </div>
            <div style="flex: 1; text-align: left; display: flex; flex-direction: column;">
              <div style="margin-bottom: 0.5rem;">
                <span style="color: ${rpColor}; font-size: 0.75rem; font-weight: 600; background: rgba(255,255,255,0.1); padding: 0.2rem 0.6rem; border-radius: 50px;">${getField(rp, 'category')}</span>
              </div>
              <h4 style="color: white; font-size: 1.1rem; margin-bottom: 1rem; line-height: 1.3;">${getField(rp, 'title')}</h4>
              <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: rgba(255,255,255,0.4); margin-top: auto;">
                <span>${getField(rp, 'date')}</span>
                <span>${getField(rp, 'readTime')}</span>
              </div>
          </div>
        `;
        relatedGrid.appendChild(card);
      });
    }
  }

  // Initial render
  renderPost();

  // Watch for language changes on the document element
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "attributes" && mutation.attributeName === "lang") {
        renderPost();
      }
    });
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });

});
