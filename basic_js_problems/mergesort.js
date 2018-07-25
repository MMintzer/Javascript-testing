// basic mergesort
const mergesort = function(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);

  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);

  let sortedLeft = mergesort(left);
  let sortedRight = mergesort(right);

  return merge(sortedLeft, sortedRight);
}

const merge = function(left, right) {
  let merged = [];

  while ((left.length) && (right.length)) {
    if (left[0] <= right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }


  return merged.concat(left).concat(right);
}


// trying to monkeypatch mergesort in
Array.prototype.mergesort = function() {
  if (this.length <= 1) {
    return this;
  }

  let mid = Math.floor(this.length / 2)

  let left = this.slice(0, mid)
  let right = this.slice(mid, this.length)
  let sortedLeft = left.mergesort()
  let sortedRight = right.mergesort()

  return Array.merge(sortedLeft, sortedRight);
}

Array.merge = function(left, right) {
  let merged = [];

  while ((left.length) && (right.length)) {
    if (left[0] <= right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift())
    }
  }
  return merged.concat(left).concat(right)
}
let arr = [5, 4, 3, 2, 1]
