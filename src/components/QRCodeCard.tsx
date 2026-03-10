const fccUrl = 'https://broadbandmap.fcc.gov/home';

export const QRCodeCard = () => {
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(fccUrl)}`;

  return (
    <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-panel">
      <h3 className="text-lg font-semibold">Scan to open FCC Broadband Map</h3>
      <img src={qrSrc} alt="QR code linking to FCC National Broadband Map" className="mt-4 h-40 w-40 rounded-lg bg-white p-2" loading="lazy" />
      <a href={fccUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm text-cyan-300 hover:underline">
        Open official map →
      </a>
    </article>
  );
};
