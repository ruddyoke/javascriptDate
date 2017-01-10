if ( !Date.prototype.toISOString2BWA ) {
    ( function() {

        function pad(number) {
            if ( number < 10 ) {
                return '0' + number;
            }
            return number;
        }

        Date.prototype.toISOStringYMD = function(delimiter) {
            delimiter = typeof delimiter !== 'undefined' ? delimiter : '-';
            return this.getUTCFullYear() +
                delimiter + pad( this.getUTCMonth() + 1 ) +
                delimiter + pad( this.getUTCDate() );
        };

        Date.prototype.toISOStringDMY = function(delimiter) {
            delimiter = typeof delimiter !== 'undefined' ? delimiter : '-';
            return ''+ pad( this.getUTCDate() +
                    delimiter + pad( this.getUTCMonth() + 1 ) +
                    delimiter +  this.getUTCFullYear() )
                ;
        };

    }() );
