var imgurImageCache = {};
var imgurGalleryCache = {};

var maxTex = 4096.0;

function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

//TODO: chack out https://github.com/mauricesvay/ImageResolver
var getImgurImageId = function(imgurURL) {
  var part = null;
  var spl = imgurURL.split('/');
  for (i=0; l=spl.length,i<l; i++) {
    if (spl[i].endsWith("imgur.com")){
      if (i<l-1) {
        part = spl[i+1];
        if (part=="") {
          return null;
        }
        partspl = part.split('.');

        if (partspl[0]=="")
          return null;

        return partspl[0];
      }
    }
  }
  return null;
}

var loadImageToCanvas = function(image, callbackFunc) {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");

  var iw = parseFloat(image.width);
  var ih = parseFloat(image.height);
  var cw=iw, ch=ih;

  if (iw > maxTex) {
    ch = maxTex*ih/iw;
    cw = maxTex;
  }

  if (ih > maxTex) {
    cw = maxTex*iw/ih;
    ch = maxTex;
  }

  ctx.canvas.width  = cw;
  ctx.canvas.height = ch;
  ctx.drawImage(image, 0, 0, cw, ch);

  //callbackFunc(image.imgsrc);
  callbackFunc({'canvas':canvas, 'ctx':ctx, 'image': image});
}

var loadImageInit = function(imgsrc, callbackFunc) {
  var image = new Image();
  image.imgsrc = imgsrc;
  image.crossOrigin = "Anonymous";
  // this.image.onload = this.imageLoaded;
  image.onload = function () {
    loadImageToCanvas(image, callbackFunc);
  };
  image.src = imgsrc;
}

var doImgurCall = function(dataPart, apiBase, postFunc, callbackFunc) {
  var imgurAPI = "";
  imgurAPI += apiBase;
  imgurAPI += dataPart;
  imgurAPI += "?client_id=fe596e6329962dd";

  var xhr= new XMLHttpRequest();
  xhr.open("GET",imgurAPI,true);
  xhr.setRequestHeader("Authorization", "Client-ID fe596e6329962dd");
  xhr.setRequestHeader("Accept", "application/json");
  xhr.send();
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4 && xhr.status==200) {
      var dataArray = JSON.parse(xhr.responseText);
      postFunc(dataPart, dataArray, callbackFunc);
    }
  };
}

var gotImgurImageSrc = function(imagePart, dataArray, callbackFunc) {
  imgurImageCache[imagePart] = dataArray;
  var imgURL = dataArray.data.link;

  if (callbackFunc!=null){
    loadImageInit(imgURL, callbackFunc);
  }
}

var getImgurImage = function(imagePart, callbackFunc) {
  if (imagePart in imgurImageCache) {
    if (callbackFunc!=null)
      gotImgurImageSrc(imagePart, imgurImageCache[imagePart], callbackFunc);
    return;
  }
  doImgurCall(imagePart, "https://api.imgur.com/3/image/", gotImgurImageSrc, callbackFunc);
};

var fetchImageURL = function(url, callbackFunc) {
  var imgurTest = getImgurImageId(url);
  if (imgurTest!=null) {
    getImgurImage(imgurTest, callbackFunc);
  } else {
    loadImageInit(url, callbackFunc);
  }
}

VRImageURLParser = function() {
  var self = this;
  this.urlList = [];
  this.callback = null;




  this.gotURLIdx = function(idx, url) {
    self.urlList[idx] = url;
    for (il=0;il<self.urlList.length;il++) {
      if (self.urlList[il] == null){
        return;
      }
    }
    self.callback(self.urlList);
  }

  this.init = function(imageList, callback) {
    this.callback = callback;
    for (im=0; im<imageList.length; im++) {
      this.urlList[im] = null;
    }
    for (im=0; im<imageList.length; im++) {
      fetchImageURL(imageList[im], this.gotURLIdx.bind(null, im));
    }
  }
};


module.exports = VRImageURLParser;
