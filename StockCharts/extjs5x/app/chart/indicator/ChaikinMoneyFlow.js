/**
 * @class Chartsly.chart.indicator.WilliamPctR
 * @extends Ext.chart.CartesianChart
 *
 * William %R chart that looks for numeric axis and adds William %R specific configuration
 * such as fields, maximum, and minimum. fields is defaulted to ['pctr'] as this field is added by the
 * WilliamPctR series to the records.
 * 
 * The calculated %R value is set a "pctr" field on the record
 */
Ext.define("Chartsly.chart.indicator.ChaikinMoneyFlow", {
    extend: 'Ext.chart.CartesianChart',
    requires: ['Chartsly.series.indicator.ChaikinMoneyFlow', 'Chartsly.sprite.indicator.ChaikinMoneyFlow'],
    xtype: 'chaikinmoneyflow',

    initConfig: function(config) {
		 
        var series = config.series[0];
       
        Ext.Array.each(config.axes, function(axis, index, recs) {
            if (axis.type === 'numeric') {
                Ext.apply(axis, {
                    fields: ['cmf'],
                    maximum: 1,
                    minimum: -1
						  //,majorTickSteps:4
                 
                });
            }
        });

        this.callParent(arguments);
    }
});
