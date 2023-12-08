const INDICATORS_DATA = [
    {
        name: "Average Directional Index",
        short: "ADX",
        details:
            "To use this indicator you have to pass data as required parameter, and period as optional parameter which has 14 as default value.",
        example: "ADX(data, 10) < ADX(data)",
        code: `import pandas as pd

        # Average Directional Index
        def adx(data: pd.DataFrame, period = 14):
            high = data['High']
            low = data['Low']
            close = data['Close']
        
            tr = pd.DataFrame(index=data.index)
            tr['tr1'] = high - low  # True Range 1
            tr['tr2'] = abs(high - close.shift())  # True Range 2
            tr['tr3'] = abs(low - close.shift())  # True Range 3
            tr['true_range'] = tr.max(axis=1)  # True Range (largest of the three)
        
            tr['plus_dm'] = high - high.shift()
            tr['minus_dm'] = low.shift() - low
            tr['plus_dm'] = tr['plus_dm'].apply(lambda x: x if x > 0 else 0)  # Set negative values to 0
            tr['minus_dm'] = tr['minus_dm'].apply(lambda x: x if x > 0 else 0)  # Set negative values to 0
        
            tr['plus_di'] = 100 * (tr['plus_dm'].rolling(period).sum() / tr['true_range'].rolling(period).sum())
            tr['minus_di'] = 100 * (tr['minus_dm'].rolling(period).sum() / tr['true_range'].rolling(period).sum())
        
            tr['dx'] = 100 * (abs(tr['plus_di'] - tr['minus_di']) / abs(tr['plus_di'] + tr['minus_di']))
        
            adx = tr['dx'].rolling(period).mean()
        
            return adx`,
    },
    {
        name: "Bollinger Bands",
        short: "BB",
        details:
            "You can use lower band and upper band separately by using [BOLD] for lower and [BOLU] for upper and you have to pass [open | high | low | close] as required parameter.",
        example: "BOLD(close) < BOLU(low)",
        code: `import pandas as pd

        # Bollinger Bands lower band
        def bold(data: pd.DataFrame):
            WINDOW = 20
            SMA = data.rolling(window = WINDOW).mean()
            SD = data.rolling(window = WINDOW).std()
            return SMA - 2 * SD
        
        # Bollinger Bands upper band
        def bolu(data: pd.DataFrame):
            WINDOW = 20
            SMA = data.rolling(window = WINDOW).mean()
            SD = data.rolling(window = WINDOW).std()
            return SMA + 2 * SD`,
    },
    {
        name: "Commodity Channel Index",
        short: "CCI",
        details:
            "You can use this indicator by passing [data] as required parameter, then [period] as optional parameter which has default value as 20.",
        example: "CCI(data) < CCI(data, 14)",
        code: `
    import pandas as pd
    import numpy as np
        
        # Commodity Channel Index
        def cci(data: pd.DataFrame, period = 20):
            typical_price = (data['High'] + data['Low'] + data['Close']) / 3
            mean_deviation = typical_price.rolling(period).apply(lambda x: np.mean(np.abs(x - np.mean(x))), raw=True)
            cci = (typical_price - typical_price.rolling(period).mean()) / (0.015 * mean_deviation)
            return cci`,
    },
    {
        name: "Exponential Moving Average",
        short: "EMA",
        details:
            "You can use this indicator by passing [open | high | low | close] as required parameter, then [period] as optional parameter which has default value as 14.",
        example: "EMA(open) < EMA(close)",
        code: `
    import pandas as pd

        # Exponential Moving Average
        def ema(data: pd.DataFrame, span):
            return data.ewm(span = span, adjust = False).mean()`,
    },
    {
        name: "Moving Average Convergence Divergence",
        short: "MACD",
        details: `You can use Moving Average Convergence Divergence - MACD line with [MACD] and passing [data] as required parameter, then short_period and long_period as optional parameters with 12 and 26 as default values.
            You can use Moving Average Convergence Divergence - signal line with [MACDS] and passing [data] as required parameter, then short_period, long_period, and signal_period as optional parameters with 12, 26, and 9 as default values.
            You can use Moving Average Convergence Divergence - histogram line with [MACDH] and passing [data] as required parameter, then short_period, long_period, and signal_period as optional parameters with 12, 26, and 9 as default values.`,
        example: "MACD(data) + MACDH(data) < MACDS(data, 2, 3, 4)",
        code: `
    import pandas as pd

        # Moving Average Convergence Divergence - MACD line
        def macd(data: pd.DataFrame, short_period = 12, long_period = 26):
            # Calculate the short-term exponential moving average (EMA)
            ema_short = data.ewm(span=short_period, adjust=False).mean()
        
            # Calculate the long-term exponential moving average (EMA)
            ema_long = data.ewm(span=long_period, adjust=False).mean()
        
            # Calculate the MACD line
            macd_line = ema_short - ema_long
        
            return macd_line
        
        # Moving Average Convergence Divergence - signal line
        def macds(data: pd.DataFrame, short_period=12, long_period=26, signal_period=9):
            # Calculate the short-term exponential moving average (EMA)
            ema_short = data.ewm(span=short_period, adjust=False).mean()
        
            # Calculate the long-term exponential moving average (EMA)
            ema_long = data.ewm(span=long_period, adjust=False).mean()
        
            # Calculate the MACD line
            macd_line = ema_short - ema_long
        
            # Calculate the signal line
            signal_line = macd_line.ewm(span=signal_period, adjust=False).mean()
        
            return signal_line
        
        # Moving Average Convergence Divergence - histogram line
        def macdh(data: pd.DataFrame, short_period=12, long_period=26, signal_period=9):
            # Calculate the short-term exponential moving average (EMA)
            ema_short = data.ewm(span=short_period, adjust=False).mean()
        
            # Calculate the long-term exponential moving average (EMA)
            ema_long = data.ewm(span=long_period, adjust=False).mean()
        
            # Calculate the MACD line
            macd_line = ema_short - ema_long
        
            # Calculate the signal line
            signal_line = macd_line.ewm(span=signal_period, adjust=False).mean()
        
            # Calculate the MACD histogram
            macd_histogram = macd_line - signal_line
        
            return macd_histogram`,
    },
    {
        name: "Money Flow Index",
        short: "MFI",
        details: `You can use this indicator by passing [data] as required parameter, then [period] as optional parameter which has default value as 14.`,
        example: "MFI(data) < MFI(data, 20)",
        code: `
    import pandas as pd

        # Money Flow Index
        def mfi(data: pd.DataFrame, period = 14):
            typical_price = (data['High'] + data['Low'] + data['Close']) / 3
            raw_money_flow = typical_price * data['Volume']
            positive_money_flow = raw_money_flow * (typical_price > typical_price.shift(1))
            negative_money_flow = raw_money_flow * (typical_price < typical_price.shift(1))
        
            positive_money_flow_sum = positive_money_flow.rolling(period).sum()
            negative_money_flow_sum = negative_money_flow.rolling(period).sum()
        
            money_ratio = positive_money_flow_sum / negative_money_flow_sum
            mfi = 100 - (100 / (1 + money_ratio))
        
            return mfi`,
    },
    {
        name: "On-Balance Volume",
        short: "OBV",
        details: `You can use this indicator by passing [data] as required parameter, then [period] as optional parameter which has default value as 1.`,
        example: "OBV(data) < OBV(data, 20)",
        code: `
    import pandas as pd

        # On-Balance Volume
        def obv(data: pd.DataFrame, period = 1):
            obv = pd.Series(index=data.index)  # Create an empty Series to store OBV values
        
            # Calculate the difference in closing prices
            price_diff = data['Close'].diff()
            
            # Assign volume values based on the price difference
            obv[0] = data['Volume'].iloc[0]
            obv[1:] = data['Volume'].iloc[1:].where(price_diff >= 0, -data['Volume'].iloc[1:])
            
            # Calculate the cumulative sum of volume based on the price difference within the specified period
            obv = obv.rolling(period).sum()
        
            return obv`,
    },
    {
        name: "Parabolic SAR",
        short: "PSAR",
        details: `You can use this indicator by passing [data] as required parameter, then [af_start], [af_increment], and [af_max] as optional parameter which has default values as 0.02, 0.02, and 0.2.`,
        example: "PSAR(data) < PSAR(data, 0.04, 0.04, 0.4)",
        code: `
    import pandas as pd

        # Parabolic SAR
        def psar(data: pd.DataFrame, af_start = 0.02, af_increment = 0.02, af_max = 0.2):
            high = data['High']
            low = data['Low']
        
            sar = pd.Series(index=data.index)
            trend = pd.Series(0, index=data.index)
            acceleration = af_start
            extreme = high[0]
            sar[0] = low[0]
        
            for i in range(1, len(data)):
                if trend[i-1] > 0:  # Current trend is up
                    sar[i] = sar[i-1] + acceleration * (extreme - sar[i-1])
                    if sar[i] > low[i-1]:  # Switch to downtrend
                        trend[i] = -1
                        sar[i] = extreme
                        extreme = low[i]
                        acceleration = af_start
                    else:
                        trend[i] = 1
                        acceleration = min(acceleration + af_increment, af_max)
                        if high[i] > extreme:
                            extreme = high[i]
                else:  # Current trend is down
                    sar[i] = sar[i-1] - acceleration * (sar[i-1] - extreme)
                    if sar[i] < high[i-1]:  # Switch to uptrend
                        trend[i] = 1
                        sar[i] = extreme
                        extreme = high[i]
                        acceleration = af_start
                    else:
                        trend[i] = -1
                        acceleration = min(acceleration + af_increment, af_max)
                        if low[i] < extreme:
                            extreme = low[i]
        
            return sar`,
    },
    {
        name: "Returns RSI values",
        short: "RSI",
        details: `You can use this indicator by passing [open | high | low | close] as required parameter, then [period] as optional parameter which has default value as 14.`,
        example: "RSI(close) < RSI(open, 20)",
        code: `
    import pandas as pd

        # Returns RSI values
        def rsi(data: pd.DataFrame, periods = 14):    
            close_delta = data.diff()
        
            # Make two series: one for lower closes and one for higher closes
            up = close_delta.clip(lower=0)
            down = -1 * close_delta.clip(upper=0)
        
            ma_up = up.ewm(com = periods - 1, adjust=True, min_periods = periods).mean()
            ma_down = down.ewm(com = periods - 1, adjust=True, min_periods = periods).mean()
        
            rsi = ma_up / ma_down
            rsi = 100 - (100/(1 + rsi))
            return rsi`,
    },
    {
        name: "Standard Deviation",
        short: "SD",
        details: `You can use this indicator by passing [open | high | low | close] as required parameter, then [period] as optional parameter which has default value as 5.`,
        example: "SD(close) < SD(open, 10)",
        code: `
    import pandas as pd

        # Standard Deviation
        def sd(data: pd.DataFrame, period = 5):
            std_dev = data.rolling(window=period).std(ddof=0)
            return std_dev`,
    },
    {
        name: "Simple Moving Average",
        short: "SMA",
        details: `You can use this indicator by passing [open | high | low | close] as required parameter, then [period] as optional parameter which has default value as 14.`,
        example: "SMA(close) < SMA(open, 10)",
        code: `
    import pandas as pd

        # Simple Moving Average
        def sma(data: pd.DataFrame, window):
            return data.rolling(window = window).mean()`,
    },
    {
        name: "Stochastic Oscillator",
        short: "SO",
        details: `You can use Stochastic Oscillator slow K with [SOK] and passing [data] as required parameter, then [period] as optional parameter with 14 as default value.
            You can use Stochastic Oscillator fast D with [SOD] and passing [data] as required parameter, then [period] as optional parameter with 3 as default value.`,
        example: "SOK(data) < SOD(SMA, 10)",
        code: `
    import pandas as pd

        # Stochastic Oscillator slow K
        def sok(data: pd.DataFrame, period = 14):
            # Calculate %K
            lowest_low = data['Low'].rolling(window=period).min()
            highest_high = data['High'].rolling(window=period).max()
            return (data['Close'] - lowest_low) / (highest_high - lowest_low) * 100
        
        # Stochastic Oscillator fast D
        def sod(data: pd.DataFrame, period = 3):
            # Calculate %K
            lowest_low = data['Low'].rolling(window=period).min()
            highest_high = data['High'].rolling(window=period).max()
            slowK = (data['Close'] - lowest_low) / (highest_high - lowest_low) * 100
            # Calculate %D
            return slowK.rolling(window=3).mean()`,
    },
    {
        name: "Volume Weighted Average Price",
        short: "VWAP",
        details: `You can use this indicator by passing [data] as required parameter, then [period] as optional parameter which has default value as 20.`,
        example: "VWAP(data) < VWAP(data, 14)",
        code: `
    import pandas as pd

        # Volume Weighted Average Price
        def vwap(data: pd.DataFrame, period = 20):
            volume = data['Volume']
            price = data['Close']
            vwap = (volume * price).rolling(period).sum() / volume.rolling(period).sum()
            return vwap`,
    },
    {
        name: "Williams %R",
        short: "WIR",
        details: `You can use this indicator by passing [data] as required parameter, then [period] as optional parameter which has default value as 5.`,
        example: "WIR(data) < WIR(data, 14)",
        code: `
    import pandas as pd

        # Williams %R
        def wir(data: pd.DataFrame, period = 5):
            high = data['High']
            low = data['Low']
            close = data['Close']
        
            highest_high = high.rolling(window=period).max()
            lowest_low = low.rolling(window=period).min()
        
            williams_r = (highest_high - close) / (highest_high - lowest_low) * -100
            return williams_r`,
    },
];

export default INDICATORS_DATA;