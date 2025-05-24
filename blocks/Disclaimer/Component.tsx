import RichText from '@/components/RichText';

import type { Disclaimer as DisclaimerType } from '@/payload-types';

export const DisclaimerBlock = ({ content }: DisclaimerType) => (
  <section className="wrapper-lg">
    <div className="container-lg my-8 px-14 py-10 rounded-lg bg-green-100">
      <RichText data={content} className="text-base" enableGutter={false} />
    </div>
  </section>
);
