---
title: Tổng quan về Web Services và RESTful API
date: 2024-01-24
tags:
  - Web-Services
  - RESTful-API
  - REST
  - RESTful
  - API
draft: false
summary: Tổng quan về Web Services và RESTful API trong lĩnh vực phát triển web.
images:
  - /static/images/tong-quan-ve-web-services-va-restful-api123.png
---
# Web Service là gì?

![](/public/static/images/tong-quan-ve-web-services-va-restful-api123.png)

Web Service là một công nghệ trung gian cho phép các hệ thống không liên quan tới nhau vẫn có thể giao tiếp và trao đổi dữ liệu với nhau thông qua mạng Internet bằng cách sử dụng các chuẩn giao thức như REST, SOAP hay WebSocket.

Để dễ hiểu hơn thì chúng ta có thể xem qua các ví dụ dưới đây:
- Giả sử bạn có một website bán hàng và muốn cho phép khách hàng thanh toán bằng ví điện tử Momo chẳng hạn. Nhưng hệ thống của bạn lại chả liên quan gì đến hệ thống Momo và không có sự liên kết nào để 2 hệ thống này có thể giao tiếp, trao đổi được với nhau. Lúc này, Web Service được coi là một phương pháp hữu ích. Khi mà server của ví điện tử Momo cung cấp các API để cho các ứng dụng khác có thể tích hợp và dụng các chức năng của nó. Vì vậy bạn có thể sử dụng API của Momo để xử lý thanh toán và trả về kết quả cho người dùng. 
- Đơn giản và cụ thể hơn thì mình sẽ lấy ví dụ về phía frontend và backend. Các hệ thống frontend và backend của ứng dụng web thường được xây dựng bằng các công nghệ khác nhau và có thể được triển khai trên các nền tảng và môi trường khác nhau. Khi đó, để giao tiếp được với nhau thì phía backend sẽ build và cung cấp các API cho phía frontend sử dụng.


=> Qua các ví dụ trên, chúng ta có thể thấy web service được sinh ra là để giải quyết vấn đề kết nối và tương tác qua lại giữa các ứng dụng và hệ thống khác nhau, cung cấp các chức năng cho máy khách (client) để người dùng có thể sử dụng nhằm đạt được mục tiêu sử dụng nhất định. Ngoài ra web service còn giúp cho các ứng dụng như Facebook, Youtube,... đáp ứng được khả năng đồng bộ dữ liệu trên các nền tảng khác nhau (môi trường phân tán). Một điểm đặc biệt của web service là có thể hoạt động độc lập, không bị phụ thuộc hay trói buộc bởi bất cứ ngôn ngữ nào. Điều này có nghĩa là các ứng dụng và hệ thống được phát triển bằng các ngôn ngữ lập trình khác nhau vẫn có thể sử dụng các dịch vụ web của nhau để trao đổi dữ liệu và chức năng một cách dễ dàng. 

# Ưu điểm của Web Service

- Có thể tái sử dụng
- Dễ bảo trì
- Dễ mở rộng
- Dễ hiểu, dễ sử dụng nhờ các giao thức và chuẩn mở
- Chi phí thấp, hiệu quả cao
- Tính linh hoạt
- Tính bảo mật cao
- Tính độc lập và tương thích
- Đa nền tảng

# Nhược điểm của Web Service

- Web services phụ thuộc lớn vào tốc độ đường truyền mạng.  
- Quá nhiều tiêu chuẩn cho web service khiến người dùng khó nắm bắt.
- Web Service yêu cầu phải được cập nhật, thay đổi thường xuyên. Nếu để một thời gian dài không cập nhật, web rất dễ bị lỗi hệ thống. 
- Phải quan tâm nhiều hơn đến vấn đề an toàn và bảo mật.
- Hiệu suất tối ưu của dịch vụ web bị ảnh hưởng nhiều từ số lượng các ứng dụng hoạt động trong cùng một lúc.

# Các loại Web Service phổ biến

Trước đây, các Web Service được thiết kế và triển khai theo nhiều cách khác nhau (tự do, không tuân thủ theo một nguyên tắc, quy ước nào), với các định dạng dữ liệu và cách thức trao đổi khác nhau, dẫn đến sự khó khăn trong việc tương tác giữa các ứng dụng khác nhau và gây ra nhiều vấn đề khác. Từ đó, người ta đã đưa ra 2 loại chuẩn cho web service như sau:

### SOAP Web Service 
SOAP (Simple Object Access Protocol) là một giao thức hoặc một chuẩn được sử dụng trong việc tạo và sử dụng các dịch vụ Web. SOAP sử dụng ngôn ngữ XML làm cấu trúc dữ liệu trả về và hỗ trợ nhiều giao thức truyền tải như HTTP, SMTP, TCP, UDP. SOAP Web service là một chuẩn của web service, là các dịch vụ Web được thiết kế và triển khai theo chuẩn SOAP. SOAP không có quy ước về cách viết URL cũng như http method. Nhưng bù lại, SOAP lại có WS-Security, WS-Addressing, WS-ReliableMessaging, WS-Coordination và WS-Transaction để đảm bảo tính toàn vẹn và bảo mật của các dịch vụ Web.

### RESTful Web Service
Là một chuẩn của web service, là các dịch vụ Web được thiết kế và triển khai theo kiến trúc REST. RESTful Web Service cũng giao tiếp qua HTTP và sử dụng các phương thức HTTP để thao tác với các tài nguyên (resource) trên máy chủ, có quy ước rõ ràng về cách viết URL và HTTP method và có thể sử dụng JSON, XML, plain text, html,.. làm cấu trúc dữ liệu trả về. Nhưng RESTful không cung cấp cơ chế bảo vệ thông tin trong các endpoint như SOAP. Tuy nhiên bạn có thể sử dụng **Json Web Token** kết hợp với RESTful để giải quyết vấn đề này, nên việc không có sẵn cơ chế an toàn thông tin không phải là điều đáng lo ngại khi sử dụng RESTful.

### SOAP và RESTful
Cả 2 loại SOAP và RESTful đều cho phép phía client gửi request đến server để query, nhưng chúng được thực hiện bằng những cách khác nhau. Sự khác nhau chính giữa SOAP và REST là cách mà client giao tiếp server thông qua SOAP sẽ bị hạn chế bởi nhiều quy tắc và format được thiết kế chính xác, trong khi với REST cho phép việc giao tiếp thông qua giao thức HTTP và ít các quy tắc rườm rà hơn. Từ khi các request HTTP như GET và POST trở nên quen thuộc hơn thì việc sử dụng REST dần trở nên phổ biến, dễ chịu hơn so với thời kỳ SOAP cùng với cấu trúc WSDL đầy quy tắc và luật lệ trước đó.

# Các thành phần của RESTful API

### API (Application Programming Interface) 
API là một giao diện lập trình ứng dụng cho phép một ứng dụng giao tiếp với một ứng dụng khác thông qua một tập hợp các quy tắc và giao thức. API có thể trả về dữ liệu mà bạn cần cho ứng dụng của mình ở những kiểu dữ liệu phổ biến như JSON hay XML. Nói cách khác, API ở đây là một phương thức giúp 2 phần mềm, ứng dụng khác nhau có thể giao tiếp, trao đổi với nhau dễ dàng hơn. 

### REST (Representational State Transfer)
REST là một kiến trúc phần mềm được được sử dụng để thiết kế các dịch vụ web dựa trên giao thức HTTP. REST được định nghĩa bởi Roy Fielding trong luận văn tiến sĩ của ông vào năm 2000 và được xem là một trong những công nghệ giúp chuyển đổi cấu trúc dữ liệu được sử dụng phổ biến nhất hiện nay. REST định nghĩa các nguyên tắc và ràng buộc để thiết kế các dịch vụ web hiệu quả và dễ dàng bảo trì bao gồm việc sử dụng các phương thức HTTP như GET, POST, PUT, DELETE để truy cập và xử lý các tài nguyên trên server, sử dụng URI để định danh các tài nguyên, sử dụng các định dạng thông điệp chuẩn như JSON hoặc XML để trao đổi dữ liệu giữa client và server và không lưu trạng thái (stateless) trên server. Những ứng dụng, hệ thống sử dụng kiểu thiết REST thì được gọi là RESTful.

### RESTful API (còn được gọi là RESTful Web Service)
RESTful API là các API được thiết kế và triển khai theo các nguyên tắc và ràng buộc của kiến trúc REST và là một tiêu chuẩn được dùng trong việc thiết kế API dành cho các ứng dụng web.

=> Ở dạng đơn giản và dễ hiểu hơn theo góc độ tư duy lập trình OOP thì có thể xem REST là một giao diện (interface) tập hợp các quy tắc và hướng dẫn cho việc thiết kế API theo chuẩn REST. Còn RESTful API là những API triển khai (implementation) những quy tắc và hướng dẫn của interface này. 

# Kiến trúc REST

1. Tài nguyên (Resource): là các thành phần của hệ thống được quản lý và truy cập thông qua các URI. Các tài nguyên (thực chất đều là thực thể) có thể là đối tượng, thông tin, hình ảnh, video, văn bản hoặc bất kỳ loại dữ liệu nào khác và được định danh bằng một URI (phải được thiết kế sao cho dễ hiểu, dễ đọc và dễ sử dụng). 
2. Phương thức HTTP (HTTP Methods): sử dụng các phương thức chuẩn của giao thức HTTP như GET, POST, PUT, DELETE để thực hiện các hoạt động trên tài nguyên.
3. Định dạng dữ liệu (Data Formats): là định dạng dữ liệu được sử dụng để truyền tải dữ liệu giữa các ứng dụng bao gồm JSON, XML, HTML, v.v.
4. Statelessness: không lưu trạng thái của client giữa các yêu cầu, mỗi yêu cầu HTTP đều chứa đầy đủ thông tin cần thiết để xử lý yêu cầu đó. Mỗi yêu cầu HTTP là độc lập và không liên quan đến bất kỳ yêu cầu nào trước đó. Điều này đảm bảo tính đáng tin cậy và dễ dàng mở rộng của hệ thống.
5. HATEOAS: (Hypermedia as the Engine of Application State): là khả năng cho phép ứng dụng truy cập các tài nguyên liên quan thông qua các liên kết hypermedia được trả về từ yêu cầu trước đó.
6. Dựa trên mô hình **Client – Server**: cần phân định rõ ràng giữa máy khách và máy chủ. Trong đó nhiệm vụ của máy chủ là quản lý khối lượng công việc, truy cập dữ liệu, bảo mật tên miền. Sự kết hợp giữa Client – Server cho phép mỗi máy chủ được phát triển nâng cao độc lập.
7. Tầng giao diện thống nhất: Giao diện API phải được thiết kế thống nhất, đơn giản và dễ sử dụng để tăng tính linh hoạt và tái sử dụng của API. Tuân thủ các nguyên tắc thiết kế API như định dạng bao gồm (formatting), đặt tên cho các tài nguyên (resource naming), quản lý trạng thái (state management), xác thực và ủy quyền (authentication and authorization), và quản lý lỗi (error handling).

# RESTful API hoạt động như thế nào?

![tong-quan-ve-web-services-va-restful-api2](public/static/images/tong-quan-ve-web-services-va-restful-api2.png)

RESTful API hoạt động dựa trên giao thức HTTP và sử dụng các phương thức HTTP để truy cập và thao tác với các tài nguyên trên hệ thống. Các phương thức HTTP phổ biến được sử dụng trong RESTful API bao gồm:

1. GET: Truy vấn và lấy ra thông tin của một tài nguyên. 
2. POST: Tạo mới một tài nguyên.
3. PUT: Cập nhật một tài nguyên đã có sẵn.
4. DELETE: Xóa một tài nguyên.

Những phương thức phổ biến này thường được gọi là CRUD tương ứng với Create, Read, Update, Delete – Tạo, Đọc, Sửa, Xóa.

# Ưu điểm của RESTful

RESTful API có rất nhiều ưu điểm, bao gồm:
- Tương thích cao: RESTful API sử dụng HTTP, một giao thức mà hầu hết các hệ thống và thiết bị đều hỗ trợ, giúp cho việc tương thích với các hệ thống khác trở nên dễ dàng hơn.
- Tài nguyên dễ dàng truy cập: RESTful API sử dụng các địa chỉ URI để truy cập các tài nguyên, giúp cho việc truy cập và sử dụng dữ liệu trở nên dễ dàng hơn.
- Dễ mở rộng: RESTful API cho phép bạn thêm, sửa hoặc xóa dữ liệu một cách dễ dàng, giúp cho việc mở rộng hệ thống trở nên dễ dàng hơn.
- Giao thức chuẩn: RESTful API sử dụng HTTP, một giao thức rất nhanh và hiệu quả, giúp cho việc truy cập và sử dụng dữ liệu trở nên nhanh hơn.
- Tương thích với các ngôn ngữ lập trình khác nhau: RESTful API sử dụng JSON hoặc XML để trả về dữ liệu, giúp cho việc tương thích với các ngôn ngữ lập trình khác nhau trở nên dễ dàng hơn.
- Tách biệt giữa client và server (dựa vào mô hình client-server).
- Resource caching: cơ chế cache giúp tăng tốc độ truy cập dữ liệu, giảm tải áp lực cho server và giảm lượng dữ liệu được truyền qua mạng. Qua đó cải thiện hiệu suất, tăng tốc độ phản hồi (client - cache - server).
- Hệ thống phân lớp – Layered system: Có thể giúp tạo nên một server được phân ra thành nhiều lớp.

# Một số lưu ý khi thiết kế API

1. Hiểu basic về HTTP
2. Không trả về plain text (văn bản thuần túy)
3. Không sử dụng động từ trong URI
4. Sử dụng danh từ số nhiều cho resources (tài nguyên)
5. Trả về chi tiết error trong response body
6. Đặc biệt chú ý đến HTTP status codes
