!function(r,n,t,o,e,a){function i(r){var n,t=r.length,e=this,a=0,i=e.i=e.j=0,u=e.S=[];for(t||(r=[t++]);o>a;)u[a]=a++;for(a=0;o>a;a++)u[a]=u[i=v&i+r[a%t]+(n=u[a])],u[i]=n;(e.g=function(r){for(var n,t=0,a=e.i,i=e.j,u=e.S;r--;)n=u[a=v&a+1],t=t*o+u[v&(u[a]=u[i=v&i+n])+(u[i]=n)];return e.i=a,e.j=i,t})(o)}function u(r,n){var t,o=[],e=(typeof r)[0];if(n&&"o"==e)for(t in r)try{o.push(u(r[t],n-1))}catch(a){}return o.length?o:"s"==e?r:r+"\x00"}function f(r,n){for(var t,o=r+"",e=0;e<o.length;)n[v&e]=v&(t^=19*n[v&e])+o.charCodeAt(e++);return g(n)}function c(t){try{return r.crypto.getRandomValues(t=new Uint8Array(o)),g(t)}catch(e){return[+new Date,r,r.navigator.plugins,r.screen,g(n)]}}function g(r){return String.fromCharCode.apply(0,r)}var h=t.pow(o,e),s=t.pow(2,a),p=2*s,v=o-1;t.seedrandom=function(r,a){var v=[],d=f(u(a?[r,g(n)]:0 in arguments?r:c(),3),v),l=new i(v);return f(g(l.S),n),t.random=function(){for(var r=l.g(e),n=h,t=0;s>r;)r=(r+t)*o,n*=o,t=l.g(1);for(;r>=p;)r/=2,n/=2,t>>>=1;return(r+t)/n},d},f(t.random(),n)}(this,[],Math,256,6,52);