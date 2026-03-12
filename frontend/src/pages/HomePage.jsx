import { motion } from 'framer-motion';
import OverviewChart from '../charts/OverviewChart';

function HomePage() {
  return (
    <section className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-2xl font-bold">Project scaffold ready</h2>
        <p className="text-slate-400">Frontend and backend foundations are configured.</p>
      </motion.div>
      <OverviewChart />
    </section>
  );
}

export default HomePage;
