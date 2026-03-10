import { SolutionSimulator } from '../components/SolutionSimulator';

export const SimulatorPage = () => (
  <section className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
    <h1 className="text-3xl font-bold">Solution Simulator</h1>
    <p className="mt-2 text-slate-300">Test intervention strategies against different community profiles to see how policy choices map to root causes.</p>
    <div className="mt-6">
      <SolutionSimulator />
    </div>
  </section>
);
