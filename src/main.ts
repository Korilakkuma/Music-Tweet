'use strict';

import '/src/types';

export const scriptContainer = () => {
  function main() {
    if (!window.X) {
      return;
    }

    window.X('oscillator').setup([true, true, true, true]);

    window.X('mml').setup();

    window.setTimeout(() => {
      if (!window.X) {
        return;
      }

      /*
      const tweetboxtimeline = document.querySelector('[contenteditable]');
      const tweetbuttons     = document.querySelectorAll('[data-testid="tweetButtonInline"]');

      if (tweetbuttons.length > 0) {
        tweetbuttons[0].addEventListener('click', () => {
          window.X('mml').ready(window.X('oscillator'), [tweetboxtimeline.textContent]).start(0);
        }, false);
      }
      */
    }, 5000);

    document.addEventListener(
      'mouseup',
      () => {
        if (!window.X) {
          return;
        }

        const selection = window.getSelection();

        if (selection === null || selection.rangeCount < 1) {
          return;
        }

        const range: Range = selection.getRangeAt(0);

        window.X('mml').ready({
          source: window.X('oscillator'),
          mmls: [range.toString()]
        });

        if (window.X('mml').getMML(0).length < 1) {
          return;
        }

        window.X('mml').start(0);
      },
      false
    );
  }

  main();
};
