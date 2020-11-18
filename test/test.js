var kiemthu = require('tape')
var dangcau = require('../ThuvienIsomorphisms.js')
// Có 3 đỉnh và ba đường trong G chúng ta sẽ thử tiến hành kiểm tra tính đẳng cấu của nó với chính nó
// chương trình không có định dạng tiếng việt nên viết tiếng anh đỡ
var g = [[0, 1], [1, 2], [2, 0]]
kiemthu('g ~ g', function (t) {
  t.equal(dangcau(g, g).length, 3, 'three isos on g')
  t.end()
})

var g1 = [[1, 2], [2, 3], [1, 3]]
var g2 = [[4, 3], [4, 21], [21, 3]]
kiemthu('g1 ~ g2', function (t) {
  var iso = dangcau(g1, g2)
  t.ok(iso, 'isomorphic graphs should be isomorphic')
  t.equal(iso.length, 1, 'there is one isomorphism between g1, g2')
  t.end()
})

var g3 = [[0, 1], [1, 2], [1, 3]]
var g4 = [[9, 8], [8, 7], [8, 6]]

kiemthu('g3 ~ g4', function (t) {
  var iso = dangcau(g3, g4)
  t.ok(iso, 'isomorphic graphs should be isomorphic')
  t.equal(iso.length, 2, 'there are two isomorphisms between g3, g4')
  t.end()
})

kiemthu('g1 not ~ g3', function (t) {
  var iso = dangcau(g1, g3)
  t.equal(iso.length, 0, 'non-isomorphic graphs shouldn\'t be isomorphic')
  t.end()
})
