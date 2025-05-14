import React from 'react';
import './Coin.css';

const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap}) => {
  // Fonction pour formater les nombres
  const formatNumber = (number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(number);
  };

  // Fonction pour formater les grands nombres (marketcap et volume)
  const formatLargeNumber = (number) => {
    if (number >= 1000000000) {
      return `${(number / 1000000000).toFixed(2)} Md€`;
    }
    if (number >= 1000000) {
      return `${(number / 1000000).toFixed(2)} M€`;
    }
    if (number >= 1000) {
      return `${(number / 1000).toFixed(2)} k€`;
    }
    return formatNumber(number);
  };

  return (
    <div className='coin-container'>
      <div className="coin-row">
          <div className="coin">
              <img src={image} alt="crypto" />
              <h1>{name}</h1>
              <p className="coin-symbol">{symbol.toUpperCase()}</p>
          </div>
          <div className="coin-data">
              <div className="price-container">
                  <span>Prix actuel:</span>
                  <p className="coin-price">{formatNumber(price)}</p>
              </div>
              <div className="volume-container">
                  <span>Volume total:</span>
                  <p className="coin-volume">{formatLargeNumber(volume)}</p>
              </div>
              {priceChange < 0 ? (
                  <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
              ) : (
                  <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
              )}
              <p className="coin-marketcap">
                 <span>Mkt Cap: </span> {formatLargeNumber(marketcap)}
              </p>
          </div>
      </div>
    </div>
  );
};

export default Coin;
