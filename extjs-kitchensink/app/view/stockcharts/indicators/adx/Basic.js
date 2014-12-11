/**
 * Class to test AverageDirectionalIndex chart
 */
Ext.define("KS.view.stockcharts.indicators.adx.Basic", {
    extend: 'Ext.Panel',
    xtype: 'basic-adx',
    requires: [
        'Chartsly.view.test.CandleStick',
        'Ext.chart.axis.Time',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'Chartsly.chart.indicator.AverageDirectionalIndex',
        'Chartsly.model.Stock', 
        'Chartsly.store.Apple'
    ],
    exampleDescription: [
        'A combination to a CandleStick chart and Average Directional Index (ADX) indicator'
    ],
    config: {
        items: [
            {
                xtype: 'candlestick-test-chart',
                height: 350
             
            },
               {
                xclass: 'Chartsly.chart.indicator.AverageDirectionalIndex',
                height: 250,
                insetPadding: {
                     top: 10,
                    right: 0,
                    left: 0,
                    bottom: 0
                },
                background: 'white',
                series: [
                    {
                        store: Ext.create('Chartsly.store.Apple', {}), //'Apple',
                        type: 'adx',
                        xField: 'date',
                        yField: 'adx',
                        highField: "high",
                        lowField: "low",
                        closeField: "close",smooth:true,
                        lookBackPeriod: 14,  //in days
                        style: {
                            stroke: 'black',
                            fill: 'rgba(237,123,43,0.1)',
                            miterLimit: 1
                        }
                    }
                    
                ],
                axes: [
                    {
                        type: 'numeric',
                        position: 'left',
                        style: {
                            // axisLine: false
                        }
                    },
                    {
                        type: 'time',
                        position: 'bottom',
                        fields: ['Time'],
                        style: {
                            strokeStyle: '#666',
                            majorTickSize: 5
                        },
                        dateFormat: 'Y',
                        segmenter: {
                            type: 'time',
                            step: {
                                unit: 'y',
                                step: 1
                            }
                        },
                        label: {
                            fontSize: 10,
                            fillStyle: '#666'
                        }
                    }
                ]
            }
        ]
    }
});
