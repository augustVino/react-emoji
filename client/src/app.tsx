import React, { useState, useEffect, useRef } from 'react';
import Test from '@components/Test';
import LanguageSvg from '@components/Emoji/LanguageSvg';
import EmojiSvg from '@components/Emoji/EmojiSvg';
import Emoji from '@components/Emoji';
import { Popover } from 'antd';
import './app.less';

const App: React.FC<any> = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const containerRef = useRef(null);

  const handleVisibleChange = (vi: boolean): void => {
    setVisible(vi);
  };
  return (
    <>
      <div className="app-container">
        <Test name="Vino" age={18} />
      </div>
      <div className="phone-container" ref={containerRef}>
        <header></header>
        <section></section>
        <footer>
          <div className="language-ico">
            <LanguageSvg />
          </div>
          <div className="inp">{value}</div>
          <Popover
            overlayClassName="emoji-popup"
            getPopupContainer={() => containerRef.current}
            // arrowPointAtCenter={true}
            placement="topRight"
            content={
              <Emoji
                onClick={(emoji: string) => {
                  setValue(emoji);
                  setVisible(false);
                }}
              />
            }
            title=""
            trigger="click"
            visible={visible}
            onVisibleChange={handleVisibleChange}
          >
            <div className="emoji-ico">
              <EmojiSvg />
            </div>
          </Popover>
        </footer>
      </div>
    </>
  );
};
export default App;
