import { css } from '@linaria/core';

import AssetPrice from './AssetPrice';

const margin = '8px';

const home = css`
  min-height: 100vh;
  margin: -${margin};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  text-align: center;
`;

export default function Home() {
  return (
    <div className={home}>
      <nav style={{ position: 'fixed', top: '18px' }}>Anansi</nav>
      <main>
        <p style={{ fontSize: '30px' }}>
          Congrats! You&apos;ve created storybook-test!
        </p>
        <p style={{ marginTop: '20px', fontSize: '15px' }}>
          Check out the generated ReadMe for instructions on how to use this
          library
        </p>
        <p style={{ marginTop: '20px', fontSize: '24px' }}>
          <AssetPrice symbol="BTC" />
        </p>
      </main>
    </div>
  );
}
