var ColorConverter = (function(){
    // Calculos em: http://www.easyrgb.com/en/math.php
  
    function ColorConverter(){}
  
    ColorConverter.prototype.srgbToXyz = srgbToXyz;
    ColorConverter.prototype.xyzToSrgb = xyzToSrgb;
    ColorConverter.prototype.xyzToLab = xyzToLab;
    ColorConverter.prototype.labToXyz = labToXyz;
    ColorConverter.prototype.degrees_to_radians = degrees_to_radians;
    ColorConverter.prototype.sRgbToLab = sRgbToLab;
    ColorConverter.prototype.radians_to_degrees = radians_to_degrees;
    ColorConverter.prototype.cie76 = cie76;
    ColorConverter.prototype.labToSRgb = labToSRgb;
    ColorConverter.prototype.cmc2 = cmc2;
    ColorConverter.prototype.compareRgb = compareRgb;
    ColorConverter.prototype.compareLab = compareLab;
    ColorConverter.prototype.labToLch = labToLch;
    ColorConverter.prototype.cmc = cmc;
    ColorConverter.prototype.labToHue = labToHue;
  
    function xyzToYxy(xyz){
      let xyz_x = new Decimal(xyz[0] || 0);
      let xyz_y = new Decimal(xyz[1] || 0);
      let xyz_z = new Decimal(xyz[2] || 0);
      let sum = xyz_x.add(xyz_y).add(xyz_z);
      let yxy_y1 = xyz_y;
      let yxy_x = xyz_x.div(sum);
      let yxy_y2 = xyz_y.div(sum);
      return [yxy_y1.toNumber(), yxy_x.toNumber(), yxy_y2.toNumber()];
    }
  
    function yxyToXyz(yxy){
      let yxy_y1 = new Decimal(yxy[0] || 0);
      let yxy_x = new Decimal(yxy[1] || 0);
      let yxy_y2 = new Decimal(yxy[2] || 0);
      let xyz_y = Y
      let xyz_x = yxy_x.mul( yxy_y1.div(yxy_y2) );
      let xyz_z = (new Decimal(1).minus(yxy_x).minus(yxy_y2)).mul(yxy_y1.div(yxy_y2));
      return [yxy_y1, yxy_x, yxy_y2];
    }
  
    function xyzToHLab(xyz){
      let ref_x = 95.047; // Referencia de iluminação, igual ao que é utilizado para converter RGB -> XYZ (D65/2º)
      let ref_y = 100.000;
      let ref_z = 108.883;
  
      let xyz_x = new Decimal(xyz[0] || 0);
      let xyz_y = new Decimal(xyz[1] || 0);
      let xyz_z = new Decimal(xyz[2] || 0);
  
      let var_Ka = (new Decimal(175).div(198.04)).mul(ref_y.add(ref_x));
      let var_Kb = (new Decimal(70).div(218.11)).mul(ref_y.add(ref_z));
  
      let hlab_l = new Decimal(100).mul(Decimal.sqrt(xyz_y.div(ref_y)));
      let hlab_a = var_Ka.mul(((xyz_x.div(ref_x)).minus(xyz_y.div(ref_y))).div(Decimal.sqrt(xyz_y.div(ref_y))));
      let hlab_b = var_Kb.mul( ( (xyz_y.div(ref_y)).minus(xyz_z.div(ref_z))).div(Decimal.sqrt(xyz_y.div(ref_y))));
      return [hlab_l.toNumber(), hlab_a.toNumber(), hlab_b.toNumber()];
    }
  
    function HlabToXyz(hlab){
      let ref_x = 95.047; // Referencia de iluminação, igual ao que é utilizado para converter RGB -> XYZ (D65/2º)
      let ref_y = 100.000;
      let ref_z = 108.883;
  
      let hlab_l =  new Decimal(hlab[0] || 0);
      let hlab_a =  new Decimal(hlab[1] || 0);
      let hlab_b =  new Decimal(hlab[2] || 0);
  
      let var_Ka = (new Decimal(175).div(198.04)).mul(ref_y.add(ref_x));
      let var_Kb = (new Decimal(70).div(218.11)).mul(ref_y.add(ref_z));
  
      let xyz_y = ((hlab_l.div(ref_y)).pow(2)).mul(100);
      let xyz_x = (hlab_a.div(var_Ka).mul(Decimal.sqrt(xyz_y.div(ref_y))).add(xyz_y.div(ref_y))).mul(ref_x);
      let xyz_z = (hlab_b.div(var_Kb).mul(Decimal.sqrt(xyz_y.dvi(ref_y))).minus(xyz_y.div(ref_y))).mul(ref_z).mul(-1);
      return [xyz_x, xyz_y, xyz_z];
    }
  
    function srgbToXyz(rgb){
      //sR, sG and sB (Standard RGB) input range = 0 ÷ 255
      //X, Y and Z output refer to a D65/2° standard illuminant.
  
      let var_R = new Decimal(rgb[0] || 0).div(255);
      let var_G = new Decimal(rgb[1] || 0).div(255);
      let var_B = new Decimal(rgb[2] || 0).div(255);
  
      if ( var_R > 0.04045 ){
        var_R = var_R.add(0.055).div(1.055);
        var_R = var_R.pow(2.4);
      }else{
        var_R = var_R.div(12.92);
      }
  
      if ( var_G > 0.04045 ){
        var_G = var_G.add(0.055).div(1.055);
        var_G = var_G.pow(2.4);
      }else{
        var_G = var_G.div(12.92);
      }
  
      if ( var_B > 0.04045 ){
        var_B = var_B.add(0.055).div(1.055);
        var_B = var_B.pow(2.4);
      }else{
        var_B = var_B.div(12.92);
      }
  
      var_R = var_R.mul(100);
      var_G = var_G.mul(100);
      var_B = var_B.mul(100);
  
      const x = (var_R.mul(0.4124)).add(var_G.mul(0.3576)).add(var_B.mul(0.1805));
      const y = (var_R.mul(0.2126)).add(var_G.mul(0.7152)).add(var_B.mul(0.0722));
      const z = (var_R.mul(0.0193)).add(var_G.mul(0.1192)).add(var_B.mul(0.9505));
  
      return [+x.toNumber(), +y.toNumber(), +z.toNumber()];
    }
  
    function xyzToSrgb(xyz){
      let var_X = new Decimal(xyz[0] || 0).div(100);
      let var_Y = new Decimal(xyz[1] || 0).div(100);
      let var_Z = new Decimal(xyz[2] || 0).div(100);
  
      let var_R = (var_X.mul(3.2406)).add(var_Y.mul(-1.5372)).add(var_Z.mul(-0.4986));
      let var_G = (var_X.mul(-0.9689)).add(var_Y.mul(1.8758)).add(var_Z.mul(0.0415));
      let var_B = (var_X.mul(0.0557)).add(var_Y.mul(-0.2040)).add(var_Z.mul(1.0570));
  
      if ( var_R > 0.0031308 ){
        let powR = var_R.pow(new Decimal(1).div(2.4));
        var_R = (powR.mul(1.055)).minus(0.055);
      }else{
        var_R = var_R.mul(12.92);
      }
  
      if ( var_G > 0.0031308 ){
        let powG = var_G.pow(new Decimal(1).div(2.4));
        var_G = (powG.mul(1.055)).minus(0.055);
      }else{
        var_G = var_G.mul(12.92);
      }
  
      if ( var_B > 0.0031308 ){
        let powB = var_B.pow(new Decimal(1).div(2.4));
        var_B = (powB.mul(1.055)).minus(0.055);
      }else{
        var_B = var_B.mul(12.92);
      }
  
      const r = var_R.mul(255);
      const g = var_G.mul(255);
      const b = var_B.mul(255);
  
      return [r.toNumber(), g.toNumber(), b.toNumber()];
    }
  
    function xyzToLab(xyz){
      let ref_x = 95.047; // Referencia de iluminação, igual ao que é utilizado para converter RGB -> XYZ (D65/2º)
      let ref_y = 100.000;
      let ref_z = 108.883;
      let var_X = new Decimal(xyz[0] || 0).div(ref_x);
      let var_Y = new Decimal(xyz[1] || 0).div(ref_y);
      let var_Z = new Decimal(xyz[2] || 0).div(ref_z);
  
      if ( var_X > 0.008856 ) var_X = var_X.pow(new Decimal(1).div(3));
      else                    var_X = (var_X.mul(7.787)).add(new Decimal(16).div(116));
      if ( var_Y > 0.008856 ) var_Y = var_Y.pow(new Decimal(1).div(3));
      else                    var_Y = (var_Y.mul(7.787)).add(new Decimal(16).div(116));
      if ( var_Z > 0.008856 ) var_Z = var_Z.pow(new Decimal(1).div(3));
      else                    var_Z = (var_Z.mul(7.787)).add(new Decimal(16).div(116));
  
      let lab_l = (var_Y.mul(116)).minus(16);
      let lab_a = new Decimal(500).mul(var_X.minus(var_Y));
      let lab_b = new Decimal(200).mul(var_Y.minus(var_Z));
  
      return [lab_l.toNumber(), lab_a.toNumber(), lab_b.toNumber()];
    }
  
    function labToXyz(lab){
      let ref_x = 95.047; // Referencia de iluminação, igual ao que é utilizado para converter RGB -> XYZ (D65/2º)
      let ref_y = 100.000;
      let ref_z = 108.883;
  
      let lab_l = new Decimal(lab[0] || 0);
      let lab_a = new Decimal(lab[1] || 0);
      let lab_b = new Decimal(lab[2] || 0);
  
      var_Y = ( lab_l.add(16) ).div(116);
      var_X = ( lab_a.div(500) ).add(var_Y);
      var_Z = var_Y.minus( lab_b.div(200) );
  
      if ( var_Y^3  > 0.008856 )
        var_Y = var_Y.pow(3);
      else
        var_Y = ( var_Y.minus(new Decimal(16).div(116) ) ).div(7.787);
      if ( var_X^3  > 0.008856 )
        var_X = var_X.pow(3);
      else
        var_X = ( var_X.minus( new Decimal(16).div(116) ) ).div(7.787);
      if ( var_Z^3  > 0.008856 )
        var_Z = var_Z.pow(3);
      else
        var_Z = ( var_Z.minus(new Decimal(16).div(116) ) ).div(7.787);
  
      x = var_X.mul(ref_x).toNumber();
      y = var_Y.mul(ref_y).toNumber();
      z = var_Z.mul(ref_z).toNumber();
      return [x, y, z];
    }
  
    function sRgbToLab(rgb){
      let xyz = this.srgbToXyz(rgb);
      return this.xyzToLab(xyz);
    }
  
  
    function labToSRgb(lab){
      let xyz = this.labToXyz(lab);
      return this.xyzToSrgb(xyz);
    }
  
    function cie76(lab1, lab2){
      let l1 = new Decimal(lab1[0] || 0);
      let l2 = new Decimal(lab2[0] || 0);
      let deltaL = l2.minus(l1).pow(2);
  
      let a1 = new Decimal(lab1[1] || 0);
      let a2 = new Decimal(lab2[1] || 0);
      let deltaA = a2.minus(a1).pow(2);
  
      let b1 = new Decimal(lab1[2] || 0);
      let b2 = new Decimal(lab2[2] || 0);
      let deltaB = b2.minus(b1).pow(2);
  
      let ret = Decimal.sqrt( deltaL.add(deltaA).add(deltaB) ).toNumber();
      return ret;
    }
  
    function degrees_to_radians(degrees){
      var pi = Math.PI;
      return degrees * (pi/180);
    }
  
    function radians_to_degrees(radians){
      var pi = Math.PI;
      return radians * (180/pi);
    }
  
    function labToHue( var_a, var_b ) {//Function returns CIE-H° value
       var_a = new Decimal(var_a || 0);
       var_b = new Decimal(var_b || 0);
       let var_bias = new Decimal(0);
       if ( var_a >= 0 && var_b == 0 ) return 0;
       if ( var_a <  0 && var_b == 0 ) return 180;
       if ( var_a == 0 && var_b >  0 ) return 90;
       if ( var_a == 0 && var_b <  0 ) return 270;
       if ( var_a >  0 && var_b >  0 ) var_bias = new Decimal(0);
       if ( var_a <  0               ) var_bias = new Decimal(180);
       if ( var_a >  0 && var_b <  0 ) var_bias = new Decimal(360);
       return new Decimal(this.radians_to_degrees(Decimal.atan(var_b.div(var_a)))).add(var_bias);
    }
  
    function cmc(lab1, lab2, weightL = 1, weightC = 1){
      weightL = new Decimal(weightL || 0);
      weightC = new Decimal(weightC || 0);
      let [labL1, labA1, labB1] = lab1.map(v =>{ return new Decimal(v) });
      let [labL2, labA2, labB2] = lab2.map(v =>{ return new Decimal(v) });
  
      let xC1 = Decimal.sqrt( (labA1.pow(2)).add(labB1.pow(2)));
      let xC2 = Decimal.sqrt((labA2.pow(2)).add(labB2.pow(2)));
      let xff = Decimal.sqrt((xC1.pow(4)).div((xC1.pow(4)).add(1900)));
      xH1 = this.labToHue( labA1, labB1 );
  
      let xTT = 0;
      if ( xH1 < 164 || xH1 > 345 )
        xTT = new Decimal(0.36).add(Decimal.abs(new Decimal(0.4).mul(Decimal.cos( this.degrees_to_radians(  35 + xH1 )))));
      else
        xTT = new Decimal(0.56).add(Decimal.abs(new Decimal(0.2).mul(Decima.cos( this.degrees_to_radians( 168 + xH1)))));
  
        let xSL = 0;
      if ( labL1 < 16 )
        xSL = new Decimal(0.511);
      else
        xSL = (labL1.mul(0.040975)).div((labL1.mul(0.01765)).add(1));
  
      let xSC = ((xC1.mul(0.0638)).div((xC1.mul(0.0131)).add(1))).add(0.638);
      let xSH = ((xff.mul(xTT)).add(1).minus(xff)).mul(xSC);
      let xDH = Decimal.sqrt(((labA2.minus(labA1)).pow(2)).add((labB2.minus(labB1)).pow(2)).minus((xC2.minus(xC1)).pow(2)));
      xSL = (labL2.minus(labL1)).div(weightL.mul(xSL));
      xSC = (xC2.minus(xC1)).div(weightC.mul(xSC));
      xSH = xDH.div(xSH);
  
      return Decimal.sqrt((xSL.pow(2)).add(xSC.pow(2)).add(xSH.pow(2))).toNumber();
    }
  
    function cmc2(labhc1, labhc2){ // calculo da Cris
      let weightC = new Decimal(1);
      let weightL = new Decimal(1);
      let [labL1, labA1, labB1, labH1, labC1] = labhc1.map( v =>{ return new Decimal(v || 0) });
      let [labL2, labA2, labB2, labH2, labC2] = labhc2.map( v =>{ return new Decimal(v || 0) });
      let [deltaL, deltaA, deltaB, dH, deltaC] = labhc1.map((v, i) => { return new Decimal(v).minus(new Decimal(labhc2[i] || 0)) });
      let deltaH = Decimal.sqrt( Decimal.abs( ( deltaA.pow(2) ).add( deltaB.pow(2) ).minus( deltaC.pow(2) ) ) )
      let sL = (labL1.mul(0.040975)).div((labL1.mul(0.01765)).add(1));
      let sC = ( (labC1.mul(0.0638)).div( (labC1.mul(0.0131)).add(1) ) ).add(0.638);
      let f = Decimal.sqrt( (labC1.pow(4)).div((labC1.pow(4)).add(1900)) );
      let t = ((Decimal.cos(labH1.add(35))).mul(0.4)).add(0.36);
      let sH = sC.mul((f.mul(t)).add(1).minus(f));
  
      let ret = Decimal.sqrt(((deltaL.div(sL)).pow(2)).add((deltaC.div(sC)).pow(2)).add((deltaH.div(sH)).pow(2)))
      return ret;
    }
  
    function compareRgb(rgb1, rgb2, alg='cie76'){
      let lab1 = this.sRgbToLab(rgb1);
      let lab2 = this.sRgbToLab(rgb2);
      return this.compareLab(lab1, lab2, alg);
    }
  
    function compareLab(lab1, lab2, alg){
      let delta = 0;
      if(alg == 'cie76'){
        delta = this.cie76(lab1, lab2);
      }else if(alg == 'cmc'){
        delta = this.cmc(lab1, lab2);
      }else if(alg == 'cmc2'){
        let lch1 = this.labToLch(lab1);
        let lch2 = this.labToLch(lab2);
        let labch1 = [lab1[0], lab1[2], lab1[3], lch1[1], lch1[2]];
        let labch2 = [lab2[0], lab2[2], lab2[3], lch2[1], lch2[2]];
        delta = this.cmc2(labch1, labch2);
      }
      return delta;
    }
  
    function labToLabch(lab){
      let lch = labToLch(lab);
      return [lab[0], lab[1], lab[2], lch[1], lch[2]];
    }
  
    function labToLch(lab){
      let labL = new Decimal(lab[0] || 0);
      let labA = new Decimal(lab[1] || 0);
      let labB = new Decimal(lab[2] || 0);
  
      var_H = Decimal.atan2(labB, labA)  //Quadrant by signs
  
      if ( var_H > 0 )
        var_H = (var_H.div(Math.PI)).mul(180);
      else
        var_H = new Decimal(360).minus(Decimal.abs(var_H).div(Math.PI)).mul(180);
  
      labC = Decimal.sqrt((labA.pow(2)).add(labB.pow(2)));
      labH = var_H;
      return [labL.toNumber(), labC.toNumber(), labH.toNumber()];
    }
  
    function lchToLab(lch){
      let lch_l = new Decimal(lch[0]);
      let lch_c = new Decimal(lch[1]);
      let lch_h = new Decimal(lch[2]);
      let lab_l = lch_l;
      let lab_a = Decimal.cos(degrees_to_radians(lch_h)).mul(lch_c);
      let lab_b = Decimal.sin(degrees_to_radians(lch_h)).mul(lch_c);
      return [lab_l.toNumber, lab_a.toNumber(), lab_b.toNumber()];
    }
  
    return ColorConverter;
  })();
  