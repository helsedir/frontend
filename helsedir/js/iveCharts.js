(function ($) {
    /* Single column graph */
    $.fn.singleColumns = function(options) {
        var self = this;
        self.css({
            'position': 'relative'
        });

        /* Templates */
        var holder = $('<div class="columnOuter" />');
        var columnTemplate = $('<div class="column" />');
        var numberTemplate = $('<div class="number" />');
        var titleTemplate = $('<div class="title" />');

        /* Options extensions */
        var opts = $.extend({}, $.fn.singleColumns.defaults, options);
        opts.columnCount = opts.columns.length;
        opts.columnWidth = opts.columnCount > 0 ? 100 / (opts.columnCount) : 0;

        /* Get highest number */
        var highestNumber = 0;
        for (var x = 0; x < opts.columns.length; x++) {
            if (opts.columns[x].number > highestNumber) {
                highestNumber = opts.columns[x].number;
            }
        }

        /* Needed for equal distributing columns */
        var lastPos = 0;
        /* Calculation of item size and placement */
        var itemWidth = 50 - (50 / opts.columnCount);
        var itemMargin = (100 - itemWidth) / 2;

        /* Looping through data for column creation */
        for (var i = 0; i < opts.columnCount; i++) {
            var current = opts.columns[i];

            /* Setting position from the left */
            var leftpos = (([i] * opts.columnWidth) + opts.columnWidth / 2) - lastPos;
            lastPos += leftpos;

            /* Clone the parent div */
            var itemOuter = holder.clone();
            itemOuter.css({
                width: opts.columnWidth + '%',
            });

            /* Cloning the column number */
            var number = numberTemplate.clone();
            number.text((opts.columns[i].number));
            itemOuter.append(number);
            
            /* Cloning the column item */
            var item = columnTemplate.clone();
            var itemHeight = (current.number * 80) / highestNumber;
            item.css({
                height: opts.animate ? 0 : itemHeight + '%',
                width: itemWidth + '%',
                backgroundColor: opts.colors[i],
                marginLeft: itemMargin + '%',
            });
             
            /* If animation option is true */
            if (opts.animate) {
                item.animate({
                    height: '+=' + itemHeight + '%'
                }, 1000);
            }

            itemOuter.append(item);

            /* Cloning the title */
            var title = titleTemplate.clone();
            title.text((opts.columns[i].title));
            itemOuter.append(title);

            self.append(itemOuter);
        }

        /* Return for jquery chaining */
        return self;
    };

    /* Plugin defaults */
    $.fn.singleColumns.defaults = {
        colors: ['#999999', '#cccccc', '#999999', '#cccccc', '#999999', '#cccccc'],
        columns: [],
        animate: true
    };

    /* Multi column graph */
    $.fn.multiColumns = function (options) {
        var self = this;
        //self.css({
        //    'position': 'relative'
        //});

        /* Templates */
        var holder = $('<div class="columnOuter" />');
        var columnInnerTemplate = $('<div class="columnHolder" />');
        var columnTemplate = $('<div class="column" />');
        var numberTemplate = $('<div class="number" />');
        var titleTemplate = $('<div class="title" />');

        /* Options extensions */
        var opts = $.extend({}, $.fn.multiColumns.defaults, options);
        opts.columnCount = opts.columns.length;
        opts.columnWidth = opts.columnCount > 0 ? 100 / (opts.columnCount) : 0;

        for (var z = 0; z < opts.columns.length; z++) {
            /* Get highest number */
            var highestNumber = 0;
            for (var x = 0; x < opts.columns[z].data.length; x++) {
                console.log(opts.columns[z].data[x].title);
                if (opts.columns[z].data[x].number > highestNumber) {
                    highestNumber = opts.columns[z].data[x].number;
                }
            }

            /* Needed for equal distributing columns */
            var lastPos = 0;
            /* Calculation of item size and placement */
            var itemWidth = 50 - (50 / opts.columnCount);
            var itemMargin = (100 - itemWidth) / 2;

            /* Clone the parent div */
            var itemOuter = holder.clone();
            itemOuter.css({
                width: opts.columnWidth + '%',
            });

            
           
            /* Looping through data for column creation */
            for (var i = 0; i < opts.columns[z].data.length; i++) {
                var columnInner = columnInnerTemplate.clone();
                columnInner.css({
                    width: 100 / opts.columns[z].data.length + '%'
                });
                var current = opts.columns[z].data[i];

                /* Setting position from the left */
                var leftpos = (([i] * opts.columnWidth) + opts.columnWidth / 2) - lastPos;
                lastPos += leftpos;

                /* Cloning the column number */
                var number = numberTemplate.clone();
                number.text((current.number));
                number.addClass('small');
                columnInner.append(number);

                /* Cloning the column item */
                var item = columnTemplate.clone();
                var itemHeight = (current.number * 80) / highestNumber;
                item.css({
                    height: opts.animate ? 0 : itemHeight + '%',
                    width: itemWidth + '%',
                    backgroundColor: opts.colors[i],
                    marginLeft: itemMargin + '%',
                });

                /* If animation option is true */
                if (opts.animate) {
                    item.animate({
                        height: '+=' + itemHeight + '%'
                    }, 1000);
                }

                columnInner.append(item);

                /* Cloning the title */
                var title = titleTemplate.clone();
                title.text((current.title));
                title.addClass('small');
                columnInner.append(title);

                itemOuter.append(columnInner);
            }

            var groupTitle = titleTemplate.clone();
            groupTitle.text(opts.columns[z].title);
            itemOuter.append(groupTitle);

            self.append(itemOuter);
        }

        /* Return for jquery chaining */
        return self;
    };

    /* Plugin defaults */
    $.fn.multiColumns.defaults = {
        colors: ['#999999', '#cccccc', '#999999', '#cccccc', '#999999', '#cccccc'],
        columns: [],
        animate: true
    };
}(jQuery));

