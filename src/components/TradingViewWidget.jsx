import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) return;

    // Check if the script is already present
    if (document.querySelector('script[src="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"]')) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "colorTheme": "dark",
      "dateRange": "12M",
      "showChart": true,
      "locale": "en",
      "largeChartUrl": "",
      "isTransparent": false,
      "showSymbolLogo": false,
      "showFloatingTooltip": false,
      "width": "400",
      "height": "550",
      "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
      "plotLineColorFalling": "rgba(41, 98, 255, 1)",
      "gridLineColor": "rgba(42, 46, 57, 0)",
      "scaleFontColor": "rgba(209, 212, 220, 1)",
      "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
      "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
      "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
      "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
      "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
      "tabs": [
        {
          "title": "Indices",
          "symbols": [
            { "s": "FOREXCOM:SPXUSD", "d": "S&P 500 Index" },
            { "s": "FOREXCOM:NSXUSD", "d": "US 100 Cash CFD" },
            { "s": "FOREXCOM:DJI", "d": "Dow Jones Industrial Average Index" },
            { "s": "INDEX:NKY", "d": "Nikkei 225" },
            { "s": "INDEX:DEU40", "d": "DAX Index" },
            { "s": "FOREXCOM:UKXGBP", "d": "FTSE 100 Index" }
          ],
          "originalTitle": "Indices"
        },
        {
          "title": "Cryptocurrencies",
          "symbols": [
            { "s": "BINANCE:BTCUSDT", "d": "Bitcoin" },
            { "s": "BINANCE:ETHUSDT", "d": "Ethereum" },
            { "s": "BINANCE:BNBUSDT", "d": "Binance Coin" },
            { "s": "BINANCE:ADAUSDT", "d": "Cardano" },
            { "s": "BINANCE:XRPUSDT", "d": "Ripple" },
            { "s": "BINANCE:DOGEUSDT", "d": "Dogecoin" }
          ],
          "originalTitle": "Cryptocurrencies"
        },
        {
          "title": "Forex",
          "symbols": [
            { "s": "FX:EURUSD", "d": "EUR to USD" },
            { "s": "FX:GBPUSD", "d": "GBP to USD" },
            { "s": "FX:USDJPY", "d": "USD to JPY" },
            { "s": "FX:USDCHF", "d": "USD to CHF" },
            { "s": "FX:AUDUSD", "d": "AUD to USD" },
            { "s": "FX:USDCAD", "d": "USD to CAD" }
          ],
          "originalTitle": "Forex"
        }
      ]
    });

    if (container.current) {
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);
