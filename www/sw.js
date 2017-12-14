importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "build/app/1l8ipw4v.js",
    "revision": "14a9dc9499f5c7da1d9cac5e33f66a27"
  },
  {
    "url": "build/app/1nfppk0l.js",
    "revision": "d9c8323b58c285d8912a4a04def72772"
  },
  {
    "url": "build/app/4rpu1gsg.js",
    "revision": "60f48d206173d4a56bcf858cf3f8f0c2"
  },
  {
    "url": "build/app/4sjts1gh.js",
    "revision": "846846c314beac7da7b57dc5f9186b4c"
  },
  {
    "url": "build/app/5dovkuzw.js",
    "revision": "390818c39c83c238b4efb4f59f52d096"
  },
  {
    "url": "build/app/6jvza5mm.js",
    "revision": "9ed05308053e883466c30f440e37e8dc"
  },
  {
    "url": "build/app/6zar3dbo.js",
    "revision": "18a109c442fbcd779955f61220f4ef57"
  },
  {
    "url": "build/app/7lrwrcus.js",
    "revision": "8f67fd69125cf83836d28b0411bce93b"
  },
  {
    "url": "build/app/9t18ng3w.js",
    "revision": "0083d9daaddf617fbb9196c8f17967f4"
  },
  {
    "url": "build/app/afy50ki9.js",
    "revision": "d7345b1785dfde66c1d653fcae47f5b8"
  },
  {
    "url": "build/app/apwwiwxh.js",
    "revision": "2eb10e7f3c094bae0423c5230a2866d4"
  },
  {
    "url": "build/app/b9mveqcl.js",
    "revision": "c4ac1cdefc8552489406e1c404a4ba6e"
  },
  {
    "url": "build/app/bd7oke8w.js",
    "revision": "a04929cecf2e948e965cfc65185f2fc7"
  },
  {
    "url": "build/app/bfjadsun.js",
    "revision": "ab3e2b85c222753a0e7fce069122c855"
  },
  {
    "url": "build/app/c7n7xj96.js",
    "revision": "53e4a7b6d895559112f4cac3acd128ab"
  },
  {
    "url": "build/app/cv4hk7vo.js",
    "revision": "66367ad7a5f55fc36271a0e1c7df2484"
  },
  {
    "url": "build/app/cxeiqgwe.js",
    "revision": "71693e967da62cb93032403fda7acf27"
  },
  {
    "url": "build/app/daxil7tc.js",
    "revision": "d308b778cdf85de0f8783ea5e3249cd4"
  },
  {
    "url": "build/app/fgxrmdhf.js",
    "revision": "4ee423c5d87befa26f19c686a12bcc28"
  },
  {
    "url": "build/app/fr4srrrp.js",
    "revision": "151d08e2bb4f7d43c0b846875df534f6"
  },
  {
    "url": "build/app/fsfqgtuz.js",
    "revision": "38b5ae8b37230aa14db44e1825d8079a"
  },
  {
    "url": "build/app/fuwbcuvz.js",
    "revision": "fa7dc42a8488d6b4707d3bd6346d92d4"
  },
  {
    "url": "build/app/fvmikkem.js",
    "revision": "cc542895f0fdd2b641303bc11c363f00"
  },
  {
    "url": "build/app/g4evz2hz.js",
    "revision": "ff7462f6ba73870a694997b2194d282f"
  },
  {
    "url": "build/app/gienfofn.js",
    "revision": "a57f03451083293bcf59304997146700"
  },
  {
    "url": "build/app/gnwsmvmp.js",
    "revision": "2b25de9419ed5b5b8db7d426df18e805"
  },
  {
    "url": "build/app/gtmasgbj.js",
    "revision": "328d713a32439033d580dfe1f985ee73"
  },
  {
    "url": "build/app/gz87aysn.js",
    "revision": "82a69b62b146c0cfba41d679dcbd97c0"
  },
  {
    "url": "build/app/htwdwsuy.js",
    "revision": "453e5f8d8d1df5e5e01ebe50fc9f8611"
  },
  {
    "url": "build/app/hvvzaso6.js",
    "revision": "df9d2e22a08284856b15adf33b7b2e3d"
  },
  {
    "url": "build/app/hvw1b59y.js",
    "revision": "8e573fea596c5c1ee223703a3c6c6f20"
  },
  {
    "url": "build/app/if17i0w5.js",
    "revision": "11eb370e865dba43533c9185c2b80c48"
  },
  {
    "url": "build/app/iqtdhluu.js",
    "revision": "3231fb9d2ead6c49d8b8db3bd2f37d26"
  },
  {
    "url": "build/app/iqwzcu0p.js",
    "revision": "c0ababef37d1ed4d9af87992e2131b79"
  },
  {
    "url": "build/app/irdku1jo.js",
    "revision": "633a1f1438ada0d695002c647eb746b4"
  },
  {
    "url": "build/app/j6twykfu.js",
    "revision": "2aac20456cc8c02ba24d14b08c94226c"
  },
  {
    "url": "build/app/jjddpkso.js",
    "revision": "fb3988ab8284336c11d6e0e0b13f7cf3"
  },
  {
    "url": "build/app/jp0xj8zy.js",
    "revision": "3eff67f17c05731fe3360b21caa4a911"
  },
  {
    "url": "build/app/kwprmnzu.js",
    "revision": "3185340e1b5c8c033bcc6880724f83b0"
  },
  {
    "url": "build/app/mbr8wd9i.js",
    "revision": "58f1db7e330d50eee988ca7f1f54c964"
  },
  {
    "url": "build/app/mpfbedej.js",
    "revision": "37c5a1ebb1ff1edf37eccaf4c6301446"
  },
  {
    "url": "build/app/nbnedqa9.js",
    "revision": "2a1d77c704e4a96f02511c384981f8ee"
  },
  {
    "url": "build/app/nirjahme.js",
    "revision": "2975093cad8283d4a9ab663b616f2fa8"
  },
  {
    "url": "build/app/nrwztaaf.js",
    "revision": "3b113f86b65e7c7956f88a1743dac2b2"
  },
  {
    "url": "build/app/okb3ttqs.js",
    "revision": "2c58b354130fd3088b300a9c9d281075"
  },
  {
    "url": "build/app/pp7ooe1v.js",
    "revision": "a1cca47ffe3bb0b1cda4d918fa31a82f"
  },
  {
    "url": "build/app/qmuv4xnm.js",
    "revision": "216d4a2976cde2a1ab4912d32db4040f"
  },
  {
    "url": "build/app/qstkbozw.js",
    "revision": "98a38aa43513b14002d251d264149885"
  },
  {
    "url": "build/app/qsvisemv.js",
    "revision": "604751eded721249edae2c320dd2fc81"
  },
  {
    "url": "build/app/r2r2ocdb.js",
    "revision": "b94b3000661d38e48f27dcfc9b691ae2"
  },
  {
    "url": "build/app/rdy2wixm.js",
    "revision": "49a01c3265480d80cbdbb230a174ce89"
  },
  {
    "url": "build/app/ririo5sy.js",
    "revision": "fc0525d3d7b18d6744c42ad1e0e2b3c8"
  },
  {
    "url": "build/app/siu1v4jq.js",
    "revision": "0934fffd3f4779b46efa1b4a0ea89314"
  },
  {
    "url": "build/app/smrv4h1z.js",
    "revision": "1707618bf3ef23a423362f71f97b8c76"
  },
  {
    "url": "build/app/tprahqhi.js",
    "revision": "3a0d3f478926dfa8a0d73bc3dbbf2748"
  },
  {
    "url": "build/app/u6zsslg1.js",
    "revision": "d947af2b8afea6cc8b9663571eebc2f7"
  },
  {
    "url": "build/app/u9kktfni.js",
    "revision": "f49dae1aae3f0f01fa8096cc1414b513"
  },
  {
    "url": "build/app/u9umnqkt.js",
    "revision": "945f6567f19f618a5cf7512f20f84653"
  },
  {
    "url": "build/app/vcnqbgop.js",
    "revision": "ba0feda552fc46b845132637b1dab476"
  },
  {
    "url": "build/app/vendor/swiper.js",
    "revision": "f44ae3024a4323c4f98e7b69cefeee47"
  },
  {
    "url": "build/app/vj3swf5y.js",
    "revision": "e97b0646f8b3bfac5ff62b783319adbd"
  },
  {
    "url": "build/app/w3vwjrj4.js",
    "revision": "58b356357462a7496b5a25afb1b2e353"
  },
  {
    "url": "build/app/xmxfxayw.js",
    "revision": "a376eca89d574317135d6c83f2f6bfba"
  },
  {
    "url": "build/app/xqsc3swf.js",
    "revision": "7965bf914f2d726f18e692cd4f33ead6"
  },
  {
    "url": "build/app/xycti6lk.js",
    "revision": "01dea5d1a67919e61c3f6ce769d82fb6"
  },
  {
    "url": "build/app/yqtadqrk.js",
    "revision": "2c4b149e7055ec9693f8cab562d53313"
  },
  {
    "url": "build/app/zdz75uef.js",
    "revision": "462697a46e05d058a939f447ff82b65f"
  },
  {
    "url": "build/app/zpinodcd.js",
    "revision": "d67e6b924b6726d89dcda752c43c7def"
  },
  {
    "url": "build/app/zrojkfz3.js",
    "revision": "a053bc6673fe8f77b50dce4896d2dbc0"
  },
  {
    "url": "index.html",
    "revision": "511fd6501eba394b062ea15729dcde54"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
