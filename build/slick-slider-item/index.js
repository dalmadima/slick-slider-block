(()=>{"use strict";var e,r={984:()=>{const e=window.wp.blocks,r=window.React,i=window.wp.blockEditor,s=JSON.parse('{"u2":"gb-for-slick-slider/slick-slider-item"}');(0,e.registerBlockType)(s.u2,{edit:function(s){const{attributes:o,setAttributes:t}=s,{slideMargin:l}=o,{context:n}=s,a=n["gb-for-slick-slider/slideMargin"],c={minWidth:100/n["gb-for-slick-slider/slidesToShow"]+"%",marginRight:a+"px",marginLeft:a+"px"};t({slideMargin:a});const d=(0,i.useBlockProps)({style:c}),p=(0,e.getBlockTypes)(),u=[""];p.forEach((function(e){"gb-for-slick-slider/slick-slider"!==e.name&&"gb-for-slick-slider/slick-slider-item"!==e.name&&u.push(e.name)}));const g=(0,i.useInnerBlocksProps)(d,{allowedBlocks:u});return(0,r.createElement)("div",{...g})},save:function(e){const s=i.useBlockProps.save(e),o=i.useInnerBlocksProps.save(s),t=e.attributes,l={marginRight:t.slideMargin+"px",marginLeft:t.slideMargin+"px"};return(0,r.createElement)("div",{style:l,...o})}})}},i={};function s(e){var o=i[e];if(void 0!==o)return o.exports;var t=i[e]={exports:{}};return r[e](t,t.exports,s),t.exports}s.m=r,e=[],s.O=(r,i,o,t)=>{if(!i){var l=1/0;for(d=0;d<e.length;d++){for(var[i,o,t]=e[d],n=!0,a=0;a<i.length;a++)(!1&t||l>=t)&&Object.keys(s.O).every((e=>s.O[e](i[a])))?i.splice(a--,1):(n=!1,t<l&&(l=t));if(n){e.splice(d--,1);var c=o();void 0!==c&&(r=c)}}return r}t=t||0;for(var d=e.length;d>0&&e[d-1][2]>t;d--)e[d]=e[d-1];e[d]=[i,o,t]},s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={52:0,583:0};s.O.j=r=>0===e[r];var r=(r,i)=>{var o,t,[l,n,a]=i,c=0;if(l.some((r=>0!==e[r]))){for(o in n)s.o(n,o)&&(s.m[o]=n[o]);if(a)var d=a(s)}for(r&&r(i);c<l.length;c++)t=l[c],s.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return s.O(d)},i=globalThis.webpackChunkgb_for_slick_slider=globalThis.webpackChunkgb_for_slick_slider||[];i.forEach(r.bind(null,0)),i.push=r.bind(null,i.push.bind(i))})();var o=s.O(void 0,[583],(()=>s(984)));o=s.O(o)})();