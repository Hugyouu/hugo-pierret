/**
 * Version simplifiée du script Letterboxd
 * Plus légère, moins de fonctionnalités mais plus robuste
 */

async function loadLetterboxdMovie() {
    const container = document.getElementById('latest-movie-container');
    if (!container) return;
  
    container.innerHTML = '<p style="text-align:center; color:#666;">Chargement...</p>';
  
    try {
      const res = await fetch('https://api.hugo-pierret.be/letterboxd/latest-movie');
      const { title, link, published, summary } = await res.json();
  
      const imgMatch = summary.match(/<img src="([^"]+)"/);
      const poster = imgMatch?.[1] || '';
      const date = new Date(published).toLocaleDateString('fr-FR');
  
      container.innerHTML = `
        <div style="display:flex; align-items:center; gap:1rem; padding:1rem; background:#f8f9fa; border-radius:8px; border:1px solid #e9ecef;">
          ${poster ? `<img src="${poster}" alt="${title}" style="width:60px; border-radius:4px;">` : ''}
          <div>
            <h4 style="margin:0; font-size:1.1rem;"><a href="${link}" target="_blank" style="color:#333; text-decoration:none;">${title}</a></h4>
            <p style="margin:0; color:#666; font-size:0.9rem;">Regardé le ${date}</p>
          </div>
        </div>
      `;
    } catch (e) {
      console.error(e);
      container.innerHTML = `<p style="text-align:center; color:#dc3545;">Erreur de chargement du dernier film.</p>`;
    }
  }
  
  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', loadLetterboxdMovie)
    : loadLetterboxdMovie();