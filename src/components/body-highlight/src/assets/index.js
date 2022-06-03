import { Muscle, MuscleType } from '../component/metadata';


export const anteriorData = [
  {
    muscle: MuscleType.CHEST,
    svgPoints: [
      '97.067 137.396, 123.467 118.396, 143.287 111.736, 145.724 113.278, 146.657 116.006, 146.657 144.356, 145.913 148.043, 143.776 151.138, 140.592 153.140, 136.877 153.726, 97.017 137.376, 97.067 137.396',
      '98.997 132.316, 98.954 132.401, 98.982 132.491, 99.067 132.535, 99.157 132.506, 111.887 123.386, 130.507 110.516, 138.807 107.516, 139.006 107.399, 139.104 107.190, 139.066 106.963, 138.907 106.796, 129.515 103.948, 119.907 105.956, 114.357 110.706, 105.807 123.996, 98.997 132.316',
      '202.227 137.396, 175.837 118.396, 156.017 111.736, 155.937 111.736, 153.498 113.276, 152.567 116.006, 152.567 144.356, 153.312 148.043, 155.449 151.138, 158.632 153.140, 162.347 153.726, 186.437 147.816, 202.227 137.396',
      '200.307 132.316, 200.351 132.401, 200.322 132.491, 200.238 132.535, 200.147 132.506, 187.417 123.386, 168.797 110.516, 160.497 107.516, 160.299 107.399, 160.201 107.190, 160.238 106.963, 160.397 106.796, 169.790 103.948, 179.397 105.956, 184.937 110.616, 193.487 123.906, 200.307 132.316',
    ],
  },

  {
    muscle: MuscleType.OBLIQUES,
    svgPoints: [
     '113.487 151.576, 113.406 151.547, 113.323 151.571, 113.270 151.640, 113.267 151.726, 119.737 159.196, 120.206 159.316, 120.672 159.188, 121.013 158.844, 121.137 158.376, 121.137 156.556, 120.857 155.756, 120.137 155.306, 117.877 154.516, 113.487 151.576',
     '102.818 146.656, 102.818 150.406, 103.272 151.502, 104.368 151.956, 107.698 151.956, 107.784 151.929, 107.848 151.866, 108.558 150.566, 108.583 150.476, 108.558 150.386, 106.468 148.186, 103.038 146.486, 102.957 146.481, 102.883 146.514, 102.833 146.577, 102.818 146.656',
     '108.607 155.686, 109.937 160.896, 113.597 166.776, 116.097 170.056, 116.610 170.426, 117.242 170.415, 117.741 170.026, 117.907 169.416, 117.907 163.706, 117.490 162.206, 116.377 161.116, 114.677 160.036, 109.427 155.376, 109.189 155.233, 108.911 155.250, 108.692 155.421, 108.607 155.686',
     '117.937 183.506, 117.937 178.316, 117.562 176.441, 116.477 174.866, 112.947 171.916, 107.037 168.536, 106.828 168.503, 106.629 168.573, 106.487 168.731, 106.437 168.936, 106.437 172.076, 106.437 172.276, 117.227 183.886, 117.462 183.990, 117.714 183.942, 117.894 183.759, 117.937 183.506',
     '101.467 156.866, 101.467 161.236, 101.752 162.609, 102.557 163.756, 103.797 164.916, 107.357 166.326, 108.242 165.954, 108.607 165.066, 107.417 161.066, 105.917 159.196, 102.137 156.406, 101.899 156.362, 101.670 156.444, 101.512 156.628, 101.467 156.866',
     '102.458 171.626, 102.480 171.555, 102.542 171.515, 102.616 171.523, 102.668 171.576, 110.938 183.896, 115.088 188.686, 117.148 192.516, 117.408 196.516, 116.768 199.516, 116.517 199.923, 116.118 200.186, 115.645 200.255, 115.188 200.116, 111.748 197.736, 104.748 186.386, 102.458 171.626',
     '185.807 151.576, 185.892 151.535, 185.984 151.557, 186.041 151.632, 186.037 151.726, 183.687 155.726, 179.557 159.196, 179.089 159.316, 178.622 159.188, 178.282 158.844, 178.157 158.376, 178.157 156.556, 178.440 155.757, 179.157 155.306, 181.417 154.516, 185.807 151.576',
     '196.487 146.656, 196.487 150.406, 196.033 151.502, 194.937 151.956, 191.607 151.956, 191.516 151.932, 191.447 151.866, 190.747 150.566, 190.725 150.476, 190.747 150.386, 196.267 146.486, 196.348 146.481, 196.421 146.514, 196.472 146.577, 196.487 146.656',
     '190.698 155.686, 189.358 160.896, 185.708 166.776, 183.208 170.056, 182.695 170.426, 182.063 170.415, 181.564 170.026, 181.398 169.416, 181.398 163.706, 181.819 162.204, 182.938 161.116, 184.648 160.036, 189.888 155.376, 190.124 155.242, 190.396 155.262, 190.611 155.428, 190.698 155.686',
     '181.397 183.506, 181.397 178.316, 181.773 176.441, 182.857 174.866, 192.297 168.536, 192.503 168.508, 192.699 168.579, 192.838 168.734, 192.887 168.936, 192.887 172.076, 192.887 172.276, 182.097 183.886, 181.865 183.982, 181.620 183.932, 181.444 183.753, 181.397 183.506',
     '197.837 156.866, 197.837 161.236, 197.550 162.611, 196.737 163.756, 195.507 164.916, 191.937 166.316, 191.053 165.944, 190.687 165.056, 191.877 161.056, 193.377 159.186, 197.157 156.396, 197.402 156.346, 197.637 156.429, 197.798 156.620, 197.837 156.866',
     '196.848 171.626, 196.825 171.555, 196.763 171.515, 196.689 171.523, 196.638 171.576, 188.348 183.896, 184.188 188.686, 182.138 192.516, 181.878 196.516, 182.518 199.516, 182.768 199.923, 183.167 200.186, 183.640 200.255, 184.098 200.116, 187.538 197.736, 194.538 186.386, 196.848 171.626',
     '121.937 252.196, 122.832 252.243, 123.631 251.838, 124.123 251.090, 124.177 250.196, 121.887 234.196, 121.347 214.066, 120.647 210.746, 116.504 205.617, 110.567 202.746, 109.642 202.742, 108.804 203.135, 108.215 203.849, 107.987 204.746, 106.417 233.836, 109.667 243.836, 117.307 250.186, 121.937 252.196',
     '177.347 252.196, 176.453 252.243, 175.654 251.838, 175.162 251.090, 175.107 250.196, 177.937 214.056, 178.637 210.736, 182.776 205.600, 188.717 202.736, 189.640 202.736, 190.474 203.130, 191.061 203.842, 191.287 204.736, 192.867 233.826, 189.617 243.826, 181.977 250.176, 177.347 252.196'
     
    ],
  },

  {
    muscle: MuscleType.ABS,
    svgPoints: [
      '146.797 167.966, 146.797 158.186, 146.559 157.527, 145.947 157.186, 135.380 158.542, 126.747 164.786, 124.987 169.686, 124.987 174.566, 125.140 175.060, 125.519 175.412, 126.023 175.528, 126.517 175.376, 145.867 168.916, 146.513 168.618, 146.797 167.966',
      '146.707 190.536, 146.707 177.816, 146.380 176.679, 145.467 175.926, 136.197 174.996, 128.677 179.396, 124.987 188.936, 124.987 191.876, 125.191 192.761, 125.764 193.465, 126.590 193.842, 127.497 193.816, 131.337 193.126, 140.557 192.996, 144.947 192.576, 146.207 191.884, 146.707 190.536',
      '146.647 216.976, 146.707 200.666, 146.389 199.408, 145.497 198.466, 143.307 197.366, 136.208 196.515, 129.547 199.116, 126.967 201.586, 124.967 207.366, 124.967 211.496, 125.205 212.582, 125.876 213.469, 126.857 213.992, 127.967 214.056, 138.857 215.056, 144.507 218.056, 145.192 218.316, 145.911 218.177, 146.450 217.681, 146.647 216.976',
      '146.707 230.836, 146.707 266.836, 144.937 272.316, 143.864 273.384, 142.447 273.916, 131.057 251.506, 126.937 221.616, 127.213 220.801, 127.937 220.336, 136.657 220.116, 142.887 222.476, 146.707 230.836',
      '152.507 167.966, 152.507 158.186, 152.745 157.527, 153.357 157.186, 163.925 158.542, 172.557 164.786, 174.317 169.686, 174.317 174.566, 174.165 175.060, 173.786 175.412, 173.282 175.528, 172.787 175.376, 161.787 170.216, 153.447 168.916, 152.795 168.621, 152.507 167.966',
      '152.597 190.536, 152.597 177.816, 152.925 176.679, 153.837 175.926, 163.107 174.996, 170.617 179.396, 174.317 188.936, 174.317 191.876, 174.114 192.764, 173.537 193.470, 172.708 193.847, 171.797 193.816, 167.967 193.126, 158.747 192.996, 154.347 192.576, 153.079 191.894, 152.597 190.536',
      '152.657 216.976, 152.597 200.666, 152.915 199.408, 153.807 198.466, 155.997 197.366, 163.097 196.515, 169.757 199.116, 172.337 201.586, 174.337 207.366, 174.337 211.496, 174.100 212.582, 173.428 213.469, 172.447 213.992, 171.337 214.056, 160.447 215.056, 154.797 218.056, 154.113 218.316, 153.394 218.177, 152.855 217.681, 152.657 216.976',
      '152.597 230.836, 152.597 266.836, 154.357 272.306, 155.426 273.372, 156.837 273.906, 168.237 251.496, 172.407 221.576, 172.132 220.761, 171.407 220.296, 162.687 220.076, 156.457 222.436, 152.597 230.836'
    
    ],
  },

  {
    muscle: MuscleType.BICEPS,
    svgPoints: [
      '79.197 145.866, 80.304 144.253, 81.987 143.256, 90.837 139.316, 91.736 139.113, 92.587 139.466, 97.277 143.516, 97.770 144.236, 97.827 145.106, 87.827 180.106, 84.327 184.156, 74.997 186.566, 74.217 162.056, 79.197 145.866',
      '220.107 145.866, 219.001 144.253, 217.317 143.256, 213.197 141.716, 208.467 139.306, 207.564 139.104, 206.707 139.456, 202.017 143.506, 201.533 144.228, 201.477 145.096, 211.477 180.096, 214.977 184.146, 224.307 186.556, 225.087 162.046, 220.107 145.866',
      '229.478 196.156, 230.428 161.296, 224.498 145.216, 226.498 146.386, 227.678 147.636, 232.948 164.756, 229.478 196.156',
      '69.817 196.156, 68.877 161.296, 74.807 145.216, 72.757 146.386, 71.587 147.636, 66.317 164.756, 69.817 196.156',
      '72.377 200.236, 72.312 200.238, 72.260 200.199, 72.242 200.136, 72.267 200.076, 74.107 197.506, 81.867 190.256, 89.727 180.746, 89.786 180.684, 89.872 180.681, 89.935 180.740, 89.937 180.826, 84.937 191.036, 80.767 195.886, 72.377 200.236',
      '226.937 200.236, 226.995 200.227, 227.041 200.189, 227.060 200.134, 227.047 200.076, 225.197 197.506, 217.447 190.256, 209.587 180.746, 209.528 180.684, 209.442 180.681, 209.380 180.740, 209.377 180.826, 214.377 191.036, 218.557 195.886, 226.937 200.236',
    ],
  },

  {
    muscle: MuscleType.TRICEPS,
    svgPoints: [
    
    ],
  },

  {
    muscle: MuscleType.NECK,
    svgPoints: [
      '132.107 66.746, 134.937 84.406, 137.937 90.486, 145.657 104.066, 146.827 107.196, 147.617 102.826, 146.827 94.476, 142.207 83.586, 132.107 66.746',
      '134.937 88.966, 138.717 98.076, 134.777 98.076, 133.539 97.810, 132.507 97.076, 132.300 96.681, 132.327 96.236, 134.937 88.966',
      '167.187 66.746, 164.417 84.406, 161.417 90.486, 153.697 104.066, 152.527 107.196, 151.737 102.826, 152.527 94.476, 157.147 83.586, 167.187 66.746',
      '157.707 75.856, 156.937 75.856, 155.147 75.236, 153.937 74.316, 144.547 74.186, 143.207 75.186, 141.097 75.886, 140.557 75.886, 146.607 83.566, 148.267 86.266, 148.634 86.644, 149.142 86.782, 149.650 86.644, 150.017 86.266, 151.687 83.476, 157.707 75.856',
      '164.417 88.966, 160.637 98.076, 164.387 98.076, 165.789 97.796, 166.967 96.986, 167.102 96.733, 167.087 96.446, 164.417 88.966'
    ],
  },

  {
    muscle: MuscleType.TRAPS,
    svgPoints: [
      '167.188 86.526, 167.188 84.786, 191.598 98.076, 179.508 98.076, 176.777 96.986, 168.128 88.726, 167.434 87.722, 167.188 86.526',
      '132.108 86.526, 132.108 84.786, 107.708 98.076, 119.788 98.076, 122.528 96.986, 131.168 88.726, 131.861 87.722, 132.108 86.526'
    ],
  },

  {
    muscle: MuscleType.FRONT_DELTOIDS,
    svgPoints: [
      '78.837 140.436, 86.057 125.616, 100.867 107.196, 106.377 105.106, 111.797 105.056, 111.889 105.096, 111.954 105.172, 111.978 105.269, 111.957 105.366, 106.377 116.126, 92.747 134.246, 78.837 140.436',
      '73.877 138.126, 73.903 138.158, 73.942 138.170, 73.981 138.158, 74.007 138.126, 98.007 103.126, 90.607 102.936, 90.477 102.936, 84.203 105.680, 79.697 110.836, 76.927 116.836, 73.877 138.126',
      '220.467 140.436, 198.467 107.196, 192.957 105.106, 187.537 105.056, 187.446 105.096, 187.381 105.172, 187.356 105.269, 187.377 105.366, 192.957 116.126, 206.577 134.246, 220.467 140.436',
      '225.427 138.126, 225.402 138.158, 225.362 138.170, 225.323 138.158, 225.297 138.126, 201.297 103.126, 208.697 102.936, 208.827 102.936, 215.101 105.680, 219.607 110.836, 222.377 116.836, 225.427 138.126',
    ],
  },

  {
    muscle: MuscleType.HEAD,
    svgPoints: [
    
    ],
  },

  {
    muscle: MuscleType.ABDUCTORS,
    svgPoints: [
      '137.777 300.536, 142.187 292.926, 146.257 282.316, 146.365 282.207, 146.517 282.186, 146.650 282.270, 146.707 282.416, 146.707 299.776, 145.267 310.996, 141.937 323.786, 141.877 323.879, 141.772 323.915, 141.668 323.879, 141.607 323.786, 137.327 304.876, 137.777 300.536',
      '135.047 297.486, 139.217 290.717, 142.687 282.397, 142.766 281.356, 142.357 280.397, 132.607 272.027, 132.205 271.938, 131.811 272.058, 131.528 272.357, 131.427 272.756, 131.427 273.756, 129.937 279.316, 128.877 281.116, 127.987 284.443, 128.957 287.746, 135.047 297.486',
      '123.667 266.236, 123.938 265.881, 124.336 265.679, 124.782 265.670, 125.187 265.856, 126.507 266.856, 128.397 268.586, 128.688 269.046, 128.747 269.586, 126.057 277.486, 125.908 277.614, 125.717 277.660, 125.527 277.614, 125.377 277.486, 122.717 269.756, 123.667 266.236',
      '116.938 258.466, 116.863 258.438, 116.788 258.467, 116.754 258.540, 116.778 258.616, 119.028 262.926, 121.028 266.206, 121.397 264.296, 120.838 261.916, 119.838 260.666, 116.938 258.466',
      '112.837 256.046, 112.837 264.546, 114.697 275.316, 115.117 276.446, 135.187 322.446, 144.477 347.786, 144.559 347.889, 144.690 347.909, 144.798 347.835, 144.827 347.706, 138.017 319.616, 120.367 273.926, 113.237 256.006, 113.151 255.907, 113.023 255.878, 112.902 255.932, 112.837 256.046',
      '161.527 300.536, 153.047 282.316, 152.939 282.207, 152.787 282.186, 152.654 282.270, 152.597 282.416, 152.597 299.776, 154.037 310.996, 157.367 323.796, 157.433 323.884, 157.537 323.917, 157.642 323.884, 157.707 323.796, 161.987 304.886, 161.527 300.536',
      '164.257 297.486, 160.087 290.716, 156.617 282.396, 156.534 281.355, 156.947 280.396, 160.527 276.396, 166.697 272.046, 167.099 271.957, 167.493 272.078, 167.777 272.376, 167.877 272.776, 167.877 273.776, 169.387 279.296, 170.447 281.096, 171.333 284.422, 170.367 287.726, 164.257 297.486',
      '175.637 266.236, 175.367 265.881, 174.969 265.679, 174.523 265.670, 174.117 265.856, 172.797 266.856, 170.907 268.586, 170.614 269.045, 170.557 269.586, 171.127 272.746, 173.247 277.486, 173.397 277.614, 173.587 277.660, 173.778 277.614, 173.927 277.486, 176.587 269.756, 175.637 266.236',
      '182.317 258.466, 182.389 258.451, 182.456 258.481, 182.493 258.543, 182.487 258.616, 180.237 262.926, 178.237 266.206, 177.857 264.296, 178.427 261.916, 179.427 260.666, 182.317 258.466',
      '186.467 256.046, 186.467 264.546, 184.597 275.316, 184.187 276.446, 164.107 322.446, 154.827 347.786, 154.745 347.889, 154.615 347.909, 154.507 347.835, 154.477 347.706, 161.277 319.616, 178.937 273.926, 186.067 256.006, 186.154 255.907, 186.282 255.878, 186.403 255.932, 186.467 256.046'
    ],
  },

  {
    muscle: MuscleType.QUADRICEPS,
    svgPoints: [
     '109.147 250.556, 108.332 250.356, 107.514 250.546, 106.869 251.085, 106.537 251.856, 102.867 275.796, 100.427 314.186, 107.477 362.506, 112.727 379.176, 112.839 379.316, 113.017 379.336, 113.158 379.224, 113.177 379.046, 108.647 350.566, 110.727 253.316, 110.627 252.316, 109.187 250.606, 109.147 250.556',
     '101.817 266.536, 99.537 281.166, 100.867 256.317, 102.937 248.017, 103.144 247.679, 103.484 247.477, 103.879 247.458, 104.237 247.627, 105.119 248.830, 105.237 250.317, 101.817 266.536',
     '111.937 278.426, 112.008 278.314, 112.133 278.271, 112.257 278.314, 112.328 278.426, 116.967 291.686, 122.098 302.466, 130.237 321.766, 131.638 332.766, 129.767 374.056, 129.767 393.996, 129.722 394.257, 129.578 394.479, 129.358 394.627, 129.098 394.676, 125.337 394.676, 124.840 394.482, 124.598 394.006, 122.237 375.136, 112.147 328.316, 111.967 278.406, 111.937 278.426',
     '135.998 335.206, 138.898 342.336, 144.278 361.986, 144.828 368.156, 144.828 388.096, 144.608 391.096, 138.558 399.736, 133.508 391.226, 133.448 389.766, 133.918 361.766, 134.318 354.216, 135.998 335.206',
     '120.937 384.616, 119.477 374.686, 113.947 347.196, 110.287 332.196, 110.107 332.196, 112.467 361.026, 116.777 387.576, 120.067 396.986, 120.607 396.366, 121.127 395.056, 120.937 384.616',
     '190.147 250.556, 190.965 250.357, 191.785 250.547, 192.432 251.085, 192.767 251.856, 196.437 275.796, 198.877 314.186, 191.827 362.506, 186.567 379.176, 186.455 379.301, 186.287 379.316, 186.154 379.213, 186.127 379.046, 190.657 350.566, 193.087 311.316, 188.577 253.316, 188.677 252.316, 190.117 250.606, 190.147 250.556',
     '197.487 266.536, 199.767 281.166, 198.437 256.316, 196.327 248.046, 196.121 247.709, 195.781 247.507, 195.385 247.488, 195.027 247.656, 194.142 248.858, 194.027 250.346, 197.487 266.536',
     '187.337 278.426, 187.261 278.321, 187.137 278.280, 187.014 278.321, 186.937 278.426, 182.307 291.686, 177.167 302.466, 169.037 321.766, 167.637 332.766, 169.497 374.056, 169.497 393.996, 169.546 394.256, 169.690 394.476, 169.909 394.624, 170.167 394.676, 173.937 394.676, 174.435 394.482, 174.677 394.006, 177.037 375.136, 187.157 328.316, 187.337 278.406, 187.337 278.426',
     '163.297 335.206, 160.407 342.336, 155.027 361.986, 154.477 368.156, 154.477 388.096, 154.697 391.096, 160.697 399.736, 165.747 391.226, 165.807 389.766, 165.347 361.766, 164.947 354.216, 163.297 335.206',
     '178.418 384.616, 179.878 374.686, 185.408 347.196, 189.068 332.196, 189.238 332.196, 186.888 361.026, 182.578 387.576, 179.278 396.986, 178.748 396.366, 178.228 395.056, 178.418 384.616'
    ],
  },

  {
    muscle: MuscleType.KNEES,
    svgPoints: [
      '164.377 404.206, 166.937 409.986, 171.367 412.696, 176.777 409.596, 178.497 404.856, 171.367 399.756, 164.377 404.206',
      '186.467 390.756, 186.467 415.026, 186.186 415.805, 185.467 416.216, 177.667 421.276, 177.573 421.350, 177.454 421.348, 177.362 421.273, 177.337 421.156, 177.967 414.156, 179.017 411.546, 180.627 409.036, 185.837 390.666, 185.961 390.457, 186.197 390.396, 186.407 390.520, 186.467 390.756',
      '172.137 417.216, 172.129 416.917, 171.988 416.653, 171.743 416.481, 171.447 416.436, 168.697 416.056, 165.857 414.306, 169.747 427.536, 169.827 427.536, 172.137 417.216',
      '164.307 447.056, 165.357 435.456, 163.557 424.896, 158.297 413.316, 157.117 409.726, 154.477 397.006, 153.987 410.526, 156.597 423.886, 160.597 432.886, 162.927 440.196, 164.307 447.056',
      '134.937 404.206, 132.377 409.986, 127.957 412.696, 122.547 409.596, 120.817 404.856, 127.957 399.756, 134.937 404.206',
      '112.837 390.756, 112.837 415.026, 113.116 415.807, 113.837 416.216, 121.637 421.276, 121.731 421.350, 121.850 421.348, 121.942 421.273, 121.967 421.156, 121.337 414.156, 120.287 411.546, 118.667 409.036, 113.467 390.666, 113.343 390.457, 113.107 390.396, 112.898 390.520, 112.837 390.756',
      '127.167 417.216, 127.176 416.917, 127.317 416.653, 127.562 416.481, 127.857 416.436, 130.877 415.959, 133.447 414.306, 129.557 427.536, 129.477 427.536, 127.167 417.216',
      '134.997 447.056, 133.937 435.456, 135.737 424.896, 141.007 413.316, 142.177 409.726, 144.827 397.006, 145.317 410.526, 142.697 423.886, 138.697 432.886, 136.377 440.196, 134.997 447.056'
    ],
  },

  {
    muscle: MuscleType.CALVES,
    svgPoints: [
     '134.997 447.056, 133.937 435.456, 135.737 424.896, 141.007 413.316, 142.177 409.726, 144.827 397.006, 145.317 410.526, 142.697 423.886, 138.697 432.886, 136.377 440.196, 134.997 447.056',
     '140.937 436.666, 140.885 436.539, 140.758 436.486, 140.630 436.539, 140.578 436.666, 139.627 452.296, 139.108 468.426, 139.177 469.556, 142.427 474.556, 144.788 469.036, 143.267 450.176, 140.937 436.666',
     '117.047 424.156, 121.897 427.286, 129.448 458.486, 130.797 493.606, 132.797 506.706, 140.517 537.826, 137.138 537.826, 125.897 487.996, 121.467 469.736, 115.467 437.736, 117.047 424.156',
     '140.557 524.316, 137.997 513.316, 137.997 513.186, 136.597 496.426, 136.597 474.066, 136.632 473.901, 136.742 473.772, 136.900 473.712, 137.067 473.736, 139.167 475.146, 139.477 475.526, 140.537 479.186, 139.177 507.186, 140.557 524.316',
     '130.297 538.816, 132.157 538.816, 121.157 486.256, 112.467 449.936, 111.567 462.376, 113.377 473.936, 118.447 491.816, 130.297 538.816',
     '158.327 436.666, 158.391 436.567, 158.502 436.528, 158.614 436.567, 158.677 436.666, 159.677 452.296, 160.197 468.426, 160.127 469.556, 156.877 474.556, 154.517 469.036, 156.037 450.176, 158.327 436.666',
     '182.258 424.156, 177.408 427.286, 169.858 458.486, 168.508 493.606, 166.458 506.706, 158.748 537.826, 162.168 537.826, 173.408 487.996, 177.838 469.736, 183.838 437.736, 182.258 424.156',
     '158.748 524.316, 161.308 513.316, 161.308 513.186, 162.718 496.426, 162.718 474.066, 162.679 473.901, 162.566 473.773, 162.406 473.714, 162.238 473.736, 160.148 475.146, 159.838 475.527, 158.768 479.186, 160.138 507.186, 158.748 524.316',
     '168.997 538.816, 167.147 538.816, 178.147 486.256, 186.837 449.936, 187.737 462.376, 185.937 473.936, 180.867 491.816, 168.997 538.816'      
    ],
  },

  {
    muscle: MuscleType.FOREARM,
    svgPoints: [
      '63.938 219.796, 84.498 199.226, 84.798 199.147, 85.103 199.206, 85.353 199.391, 85.498 199.666, 85.767 204.246, 83.978 207.626, 81.978 209.346, 76.978 212.036, 63.938 219.796',
      '62.687 189.576, 63.445 189.045, 64.369 189.001, 65.174 189.459, 65.608 190.276, 66.377 206.936, 66.377 207.026, 61.377 222.296, 35.377 262.296, 33.377 262.296, 42.017 248.396, 46.257 237.746, 48.377 227.466, 55.767 200.326, 62.687 189.576',
      '40.787 264.316, 57.117 240.076, 73.627 217.916, 73.646 217.856, 73.624 217.796, 73.571 217.762, 73.507 217.766, 53.417 241.416, 49.007 250.046, 40.057 264.316, 40.787 264.316',
      '46.637 268.736, 59.637 249.107, 71.207 226.646, 46.597 268.736, 46.637 268.736',
      '50.007 267.736, 74.937 231.886, 81.027 219.436, 81.477 215.906, 81.107 213.666, 81.059 213.608, 80.987 213.586, 80.915 213.608, 80.867 213.666, 61.517 250.056, 50.007 267.736',
      '235.408 219.796, 214.848 199.226, 214.546 199.143, 214.239 199.201, 213.989 199.388, 213.848 199.666, 213.568 204.246, 215.358 207.626, 217.358 209.346, 222.358 212.036, 235.408 219.796',
      '236.607 189.576, 235.850 189.045, 234.925 189.001, 234.121 189.459, 233.687 190.276, 232.927 206.936, 232.927 207.026, 237.937 222.316, 263.937 262.316, 265.937 262.316, 257.297 248.416, 253.057 237.766, 250.937 227.486, 243.547 200.346, 236.607 189.576',
      '259.517 264.316, 243.187 240.076, 226.667 217.916, 226.642 217.851, 226.666 217.784, 226.728 217.750, 226.797 217.767, 246.937 241.406, 251.347 250.036, 260.297 264.306, 259.517 264.316',
      '252.667 267.736, 228.057 225.646, 252.667 267.736',
      '249.297 267.736, 224.407 231.886, 218.317 219.436, 217.867 215.906, 218.237 213.666, 218.285 213.608, 218.357 213.586, 218.430 213.608, 218.477 213.666, 237.827 250.056, 249.297 267.736',
    ],
  },
];

export const posteriorData = [
  {
    muscle: MuscleType.HEAD,
    svgPoints: [
      
    ],
  },

  {
    muscle: MuscleType.TRAPEZIUS,
    svgPoints: [
      '136.081 42.204, 141.301 52.804, 141.763 54.595, 141.481 56.424, 137.781 66.334, 137.689 66.453, 137.546 66.499, 137.402 66.453, 137.311 66.334, 135.311 59.594, 135.441 42.264, 135.454 42.139, 135.514 42.029, 135.611 41.950, 135.731 41.914, 135.856 41.927, 135.966 41.986, 136.045 42.084, 136.081 42.204',
      '144.131 50.444, 147.871 53.004, 143.151 102.154, 132.571 99.344, 122.271 95.344, 112.681 95.444, 143.071 68.444, 144.531 63.124, 144.131 50.444',
      '93.351 101.174, 93.222 101.124, 93.148 101.006, 93.159 100.868, 93.251 100.764, 101.391 97.884, 131.391 103.334, 139.861 107.614, 142.722 110.455, 143.861 114.324, 145.371 154.474, 145.198 155.116, 144.699 155.556, 144.039 155.645, 143.441 155.354, 118.211 121.134, 105.361 104.204, 93.351 101.174',
      '162.941 42.204, 157.721 52.804, 157.251 54.594, 157.531 56.424, 161.241 66.334, 161.328 66.458, 161.471 66.505, 161.614 66.458, 161.701 66.334, 163.651 59.594, 163.521 42.264, 163.424 42.105, 163.252 42.030, 163.069 42.068, 162.941 42.204',
      '154.881 50.444, 151.141 53.044, 155.861 102.194, 166.441 99.384, 176.741 95.384, 186.341 95.484, 155.941 68.484, 154.481 63.164, 154.881 50.444',
      '205.711 101.174, 205.841 101.124, 205.914 101.006, 205.903 100.868, 205.811 100.764, 197.671 97.884, 167.671 103.334, 159.201 107.614, 156.340 110.455, 155.201 114.324, 153.691 154.474, 153.870 155.115, 154.372 155.552, 155.031 155.641, 155.631 155.354, 180.851 121.134, 193.711 104.204, 205.711 101.174',
    ],
  },

  {
    muscle: MuscleType.BACK_DELTOIDS,
    svgPoints: [
      '223.641 142.474, 221.041 138.684, 208.911 126.104, 199.511 113.364, 194.591 109.234, 200.311 105.394, 208.274 104.657, 215.861 107.184, 223.641 142.474',
      '75.351 142.474, 77.941 138.684, 90.081 126.104, 99.471 113.364, 104.391 109.234, 98.671 105.394, 90.708 104.657, 83.121 107.184, 75.351 142.474',
    ],
  },

  {
    muscle: MuscleType.UPPER_BACK,
    svgPoints: [
      '96.911 123.534, 104.491 116.824, 109.101 116.934, 113.251 124.534, 116.051 132.534, 120.151 141.114, 108.881 140.604, 99.701 137.714, 92.701 136.524, 96.911 123.534',
      '91.351 143.364, 91.328 142.996, 91.478 142.659, 91.768 142.431, 92.131 142.364, 105.531 144.284, 127.661 152.664, 142.041 168.044, 143.161 171.224, 144.551 183.784, 146.831 253.514, 141.361 248.774, 130.361 237.504, 124.581 231.954, 117.031 218.044, 91.351 143.364',
      '202.111 123.534, 194.521 116.824, 189.911 116.934, 185.761 124.534, 182.971 132.534, 178.861 141.114, 190.131 140.604, 199.311 137.714, 206.311 136.524, 202.111 123.534',
      '207.711 143.364, 207.734 142.996, 207.584 142.659, 207.294 142.431, 206.931 142.364, 193.531 144.284, 171.401 152.664, 156.971 168.044, 155.851 171.224, 154.461 183.784, 152.191 253.514, 157.651 248.774, 168.651 237.504, 174.431 231.954, 181.991 218.044, 207.711 143.364',
    ],
  },

  {
    muscle: MuscleType.TRICEPS,
    svgPoints: [
      '220.451 197.694, 218.701 183.134, 219.651 148.854, 210.061 132.304, 210.061 145.064, 207.871 171.974, 212.871 186.534, 220.451 197.694',
      '223.641 162.044, 223.441 179.384, 223.641 187.954, 224.114 188.831, 224.930 189.402, 225.915 189.547, 226.861 189.234, 227.615 188.412, 227.861 187.324, 227.271 178.784, 223.641 162.044',
      '232.761 190.814, 232.351 177.334, 224.631 149.334, 222.631 145.704, 222.571 145.704, 228.271 167.554, 232.661 190.794, 232.627 190.828, 232.620 190.876, 232.641 190.919, 232.683 190.943, 232.731 190.937, 232.767 190.906, 232.779 190.859, 232.761 190.814',
      '78.571 197.694, 80.351 183.134, 79.351 148.854, 88.941 132.304, 88.941 145.064, 91.141 171.974, 86.141 186.534, 78.571 197.694',
      '75.351 162.044, 75.551 179.384, 75.351 187.954, 74.875 188.831, 74.056 189.402, 73.069 189.547, 72.121 189.234, 71.395 188.404, 71.171 187.324, 71.761 178.784, 75.351 162.044',
      '66.251 190.814, 66.701 177.334, 74.431 149.334, 76.431 145.704, 76.491 145.704, 70.791 167.554, 66.401 190.794, 66.377 190.836, 66.333 190.857, 66.285 190.849, 66.251 190.814',
    ],
  },

  {
    muscle: MuscleType.LOWER_BACK,
    svgPoints: [
      '190.621 204.664, 182.971 225.044, 182.371 228.124, 182.604 229.591, 183.701 230.594, 190.881 233.654, 191.166 233.697, 191.438 233.603, 191.635 233.392, 191.711 233.114, 191.151 221.114, 190.221 210.114, 190.621 204.664',
      '197.551 270.454, 184.931 249.934, 170.171 243.044, 178.351 234.864, 184.621 234.864, 197.551 270.454',
      '161.351 256.214, 161.327 256.078, 161.227 255.984, 161.091 255.967, 160.971 256.034, 158.971 257.754, 153.641 261.844, 152.221 266.084, 152.221 287.234, 152.246 287.338, 152.335 287.399, 152.441 287.385, 152.511 287.304, 161.351 256.214',
      '108.401 204.664, 116.041 225.044, 116.641 228.124, 116.408 229.591, 115.311 230.594, 108.131 233.654, 107.846 233.697, 107.574 233.603, 107.377 233.392, 107.301 233.114, 107.861 221.114, 108.791 210.114, 108.401 204.664',
      '101.461 270.454, 114.091 249.934, 128.851 243.044, 120.671 234.864, 114.391 234.864, 101.461 270.454',
      '137.621 256.214, 137.645 256.078, 137.744 255.984, 137.881 255.967, 138.001 256.034, 140.051 257.754, 145.381 261.844, 146.801 266.084, 146.801 287.234, 146.764 287.329, 146.677 287.382, 146.576 287.373, 146.501 287.304, 142.391 277.304, 137.621 256.214',
    ],
  },

  {
    muscle: MuscleType.FOREARM,
    svgPoints: [
      '222.521 205.674, 219.051 206.674, 214.051 203.284, 219.881 219.634, 232.041 242.164, 241.811 256.514, 234.091 234.044, 229.221 217.394, 222.521 205.674',
      '232.011 215.244, 231.611 205.474, 224.041 194.104, 232.011 215.244',
      '250.121 265.434, 248.201 248.494, 240.801 217.284, 235.681 202.514, 235.621 202.514, 235.791 214.794, 244.791 252.244, 250.051 265.444, 250.121 265.434',
      '263.011 262.044, 256.151 265.284, 256.000 265.317, 255.852 265.275, 255.740 265.169, 255.691 265.024, 239.191 197.924, 248.761 218.834, 255.761 242.564, 259.251 252.854, 263.191 261.614, 263.222 261.741, 263.198 261.870, 263.123 261.977, 263.011 262.044',
      '76.491 205.674, 79.961 206.674, 84.961 203.284, 79.131 219.634, 66.971 242.164, 57.201 256.514, 64.921 234.044, 69.791 217.394, 76.491 205.674',
      '67.001 215.244, 67.401 205.474, 74.981 194.104, 67.001 215.244',
      '48.891 265.434, 50.821 248.494, 58.211 217.284, 63.331 202.514, 63.391 202.514, 63.221 214.794, 54.221 252.244, 48.961 265.444, 48.891 265.434',
      '36.001 262.044, 42.861 265.284, 43.015 265.333, 43.173 265.301, 43.295 265.196, 43.351 265.044, 59.861 197.944, 50.291 218.854, 43.291 242.584, 39.811 252.874, 35.811 261.634, 35.821 261.878, 36.001 262.044',
    ],
  },

  {
    muscle: MuscleType.GLUTEAL,
    svgPoints: [
      '192.351 314.654, 192.446 314.730, 192.566 314.747, 192.678 314.701, 192.751 314.604, 194.921 303.894, 186.671 256.384, 168.671 246.864, 167.742 246.848, 166.886 247.207, 166.246 247.880, 165.931 248.754, 160.491 285.874, 160.711 288.861, 162.191 291.464, 165.391 294.564, 182.631 304.164, 192.351 314.654',
      '106.701 314.654, 106.606 314.730, 106.486 314.747, 106.374 314.701, 106.301 314.604, 104.131 303.894, 112.381 256.384, 130.381 246.864, 131.311 246.848, 132.170 247.206, 132.812 247.879, 133.131 248.754, 138.561 285.874, 138.341 288.860, 136.861 291.464, 133.671 294.564, 116.421 304.164, 106.701 314.654',
    ],
  },

  {
    muscle: MuscleType.ABDUCTOR,
    svgPoints: [
      '164.121 297.944, 156.121 294.744, 156.121 328.334, 157.271 339.984, 161.061 354.464, 161.128 354.626, 161.291 354.694, 161.454 354.626, 161.521 354.464, 163.071 338.954, 164.071 325.564, 164.121 297.944',
      '134.891 297.944, 142.891 294.744, 142.891 328.334, 141.751 339.984, 137.961 354.464, 137.878 354.601, 137.726 354.655, 137.575 354.601, 137.491 354.464, 135.951 338.954, 134.891 325.564, 134.891 297.944',
    ],
  },

  {
    muscle: MuscleType.HAMSTRING,
    svgPoints: [
      '202.591 298.214, 201.471 317.934, 198.921 337.704, 197.161 325.934, 195.941 316.064, 196.861 311.794, 202.591 298.214',
      '179.151 309.304, 178.001 307.154, 173.371 303.814, 169.271 302.104, 168.944 302.082, 168.640 302.205, 168.421 302.449, 168.331 302.764, 170.351 344.044, 172.831 366.984, 170.351 389.514, 164.821 408.864, 164.741 412.584, 165.801 415.884, 165.844 415.946, 165.916 415.970, 165.988 415.946, 166.031 415.884, 172.831 398.884, 179.291 379.394, 182.441 349.274, 179.151 309.304',
      '165.541 344.174, 162.341 404.274, 165.901 394.854, 168.901 377.854, 167.801 366.184, 165.541 344.174',
      '184.081 311.164, 188.661 315.284, 191.211 319.684, 193.421 339.924, 191.011 363.594, 189.011 375.904, 186.891 394.074, 185.221 380.594, 183.221 370.394, 184.611 357.904, 183.911 311.274, 183.925 311.216, 183.966 311.172, 184.022 311.153, 184.081 311.164',
      '120.871 309.304, 122.011 307.154, 126.641 303.814, 130.741 302.104, 131.068 302.082, 131.372 302.205, 131.591 302.449, 131.681 302.764, 129.681 343.994, 127.191 366.934, 129.681 389.514, 135.211 408.864, 135.291 412.584, 134.221 415.884, 134.177 415.936, 134.111 415.956, 134.045 415.936, 134.001 415.884, 127.191 398.884, 120.731 379.394, 117.591 349.274, 120.871 309.304',
      '133.471 344.174, 136.671 404.274, 133.111 394.854, 130.111 377.854, 131.211 366.184, 133.471 344.174',
      '94.771 298.214, 95.891 317.934, 98.441 337.704, 100.201 325.934, 101.421 316.064, 100.501 311.794, 94.771 298.214',
      '115.281 311.164, 110.701 315.284, 108.151 319.684, 105.941 339.924, 108.351 363.594, 110.351 375.904, 112.481 394.074, 114.151 380.594, 116.151 370.394, 114.761 357.904, 115.471 311.274, 115.459 311.206, 115.412 311.157, 115.345 311.141, 115.281 311.164',
    ],
  },

  {
    muscle: MuscleType.KNEES,
    svgPoints: [
      
    ],
  },

  {
    muscle: MuscleType.CALVES,
    svgPoints: [
      '124.891 402.434, 124.731 402.363, 124.559 402.390, 124.428 402.506, 124.381 402.674, 125.981 447.214, 128.281 473.024, 130.151 477.754, 136.471 484.384, 138.641 486.054, 139.312 486.311, 140.026 486.231, 140.623 485.833, 140.971 485.204, 143.231 454.864, 131.131 413.784, 129.001 407.034, 124.891 402.434',
      '117.661 390.864, 118.951 391.544, 120.191 392.734, 121.981 397.934, 121.981 427.774, 121.311 441.094, 124.741 469.864, 124.790 471.550, 124.111 473.094, 121.351 476.764, 120.837 477.187, 120.181 477.297, 119.557 477.066, 119.131 476.554, 112.701 460.154, 115.481 412.214, 117.661 390.864',
      '180.701 390.864, 179.411 391.544, 178.171 392.734, 176.391 397.934, 176.331 427.774, 177.001 441.094, 173.571 469.864, 173.522 471.550, 174.201 473.094, 177.071 476.764, 177.582 477.188, 178.237 477.298, 178.859 477.066, 179.281 476.554, 185.711 460.154, 182.931 412.214, 180.701 390.864',
      '174.181 404.574, 174.324 404.521, 174.474 404.555, 174.580 404.664, 174.611 404.814, 173.261 447.324, 171.351 471.954, 169.781 476.474, 164.431 482.794, 162.591 484.394, 161.997 484.657, 161.351 484.581, 160.834 484.187, 160.591 483.584, 158.681 454.584, 168.901 415.374, 170.701 408.924, 174.181 404.574',
    ],
  },

  {
    muscle: MuscleType.LEFT_SOLEUS,
    svgPoints: [
      '129.101 558.514, 130.851 560.204, 130.971 560.054, 131.101 558.764, 130.891 558.354, 130.181 556.644, 127.831 523.644, 124.731 505.224, 124.671 505.224, 126.071 529.594, 127.011 535.414, 128.771 545.064, 129.691 557.064, 128.971 556.814, 128.846 557.678, 129.101 558.514',
      '121.591 486.154, 121.563 483.320, 122.921 480.834, 124.091 479.774, 125.281 478.974, 127.603 478.444, 129.831 479.284, 132.641 481.784, 137.451 489.464, 138.091 493.294, 137.611 503.464, 135.261 534.224, 135.961 559.164, 133.521 559.234, 130.601 531.234, 121.591 486.154',
    ],
  },
  {
    muscle: MuscleType.RIGHT_SOLEUS,
    svgPoints: [
      '177.901 486.154, 177.929 483.320, 176.571 480.834, 175.401 479.774, 174.211 478.974, 171.889 478.444, 169.661 479.284, 166.851 481.784, 162.041 489.464, 161.411 493.294, 161.881 503.464, 164.231 534.224, 163.531 559.164, 165.971 559.234, 168.891 531.234, 177.901 486.154',
      '170.261 558.514, 168.511 560.204, 168.391 560.054, 168.261 558.764, 168.471 558.354, 169.181 556.644, 171.541 523.644, 174.631 505.224, 174.691 505.224, 173.291 529.594, 172.351 535.414, 170.591 545.064, 169.671 557.064, 170.391 556.814, 170.516 557.678, 170.261 558.514',
    ],
  },
];