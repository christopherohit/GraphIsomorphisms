# GraphIsomorphisms
Graph-isomorphic là một thư viện nhỏ trong javascript có thể kiểm tra tính đẳng cấu của 2 Đồ thị 
Nó được triển khai bằng cách sử dụng unification dựa trên thư viện datascript có sẵn và thời gian chạy là cấp số nhân (Info) với số lượng đỉnh của Đồ thị. Nói cách khách với thư viên này chương trình chỉ kiểm tra một Đồ thị có giới hạn khá hẹp và Đồ thị bạn có thể kiểm tra trong thời gian hợp lý là rất nhỏ.

 


var G = [ [1, 2], [2, 3], [3, 1] ]
// Có 3 đỉnh và ba đường trong G chúng ta sẽ thử tiến hành kiểm tra tính đẳng cấu của nó với chính nó
computeIsomorphisms(G, G).length === 3 //=> true

// G không đẳng cấu với H vì nó khác bậc
var H = [ [1, 2], [2, 1], [1, 3] ]
computeIsomorphisms(G, H).length > 0 //=> false

//G đẳng cấu với I. Mặc dù các đỉnh khác nhau về tên
var I = [ [42, 666], [666, 1], [1, 42] ]
computeIsomorphisms(G, I).length > 0 //=> true

Một đồ thị được chỉ định dưới dạng danh sách cạnh, một mảng các cặp số xác định một cạnh có hướng từ đỉnh đầu tiên đến đỉnh thứ 2
Lấy Ví dụ cho 2 đồ thị này 
 
var  g_1  =  [ [ 0 ,  1 ] ,  [ 1 ,  2 ] ,  [ 2 ,  0 ] ] 
var  g_2  =  [ [ 5 ,  6 ] ,  [ 5 ,  8 ] ,  [ 6 ,  8 ] ]

Bây giờ câu hỏi được thiết lập ở đây rằng liệu 2 đồ thị này có đẳng cấu với nhau hay không ? câu trả lời là chúng không đẳng cấu 

if (computeIsomorphisms(g_1, g_2).length === 0) {
  console.log('g_1 and g_2 are not isomorphic!')
}


 

Trên thực tế, nếu chúng đẳng cấu thì bạn sẽ nhận được ánh xạ giữa cách cạnh và các đỉnh’

var g_3 = [[0, 1], [1, 2], [1, 3]]
var g_4 = [[6, 7], [5, 6], [6, 8]]
console.log(computeIsomorphisms(g_3, g_4))
// [
//   [ -1, -3, -0, -2, 3, 1, 2 ],
//   [ -1, -2, -0, -3, 2, 1, 3 ]
// ]
Và đây chính là 2 đồ thị đẳng cấu với nhau
