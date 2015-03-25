(function() {
    var stringOverrides = JSON.parse( decodeURIComponent( phet.chipper.getQueryParameter( 'strings' ) || '{}' ) );
    // defined by PHET_STRINGS above, see chipper.Gruntfile.js
    assert && assert( window.phet.chipper.strings );
    window.phet.chipper.strings.get = function( key ) {
      // override strings via the 'strings' query parameter
      return stringOverrides[ key ] || window.phet.chipper.strings[ key ];
    };
  })();