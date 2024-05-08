---
title: JVM, JDK và JRE trong Java là gì ?
date: 2024-04-16
modified: true
draft: false
tags:
  - Java
  - JDK
  - JVM
  - JRE
summary: Ba thành phần nền tảng Java không thể thiếu và cách chúng hoạt động trong các ứng dụng Java của bạn
images:
  - "[[public/static/images/su-khac-nhau-giua-jvm-jdk-jre-trong-java-main.png]]"
---
JVM, JDK và JRE là 3 thành phần cốt lõi được sử dụng để chạy và phát triển các ứng dụng Java, mỗi thành phần có đặc điểm, vai trò khác nhau. Bài viết này mình sẽ giúp các bạn hiểu được basic về các thành phần này từ đó giúp bạn hiểu hơn cơ chế hoạt động của Java.
# JVM (Java Virtual Machine) là gì ?

JVM là 1 máy ảo Java được sử dụng để thực thi program Java dưới dạng mã bytecode.
Bytecode là ngôn ngữ trung gian có thể chạy được trên các nền tảng khác nhau như Window, Linux, MacOS,...

Khi program Java được biên dịch thành mã bytecode, mã bytecode này sẽ được thực thi bởi JVM và sau đó được dịch sang chính mã máy của HĐH đó. Bên cạnh đó, JVM còn quản lý và tối ưu hóa bộ nhớ (Garbage collection - Trình thu gom rác) cho các ứng dụng Java.

![](public/static/images/jvm-jdk-jre-trong-java.png)

## Kiến trúc JVM (tự tìm hiểu)
![](public/static/images/jvm-jdk-jre-trong-java-5.png)
## JVM hoạt động theo quy trình sau:
1. **Load Class**: JVM sẽ tải các class cần thiết từ file .class (bytecode) vào bộ nhớ.
2. **Verify Code**: JVM kiểm tra bytecode để đảm bảo tính hợp lệ và an toàn trước khi thực thi. Nếu bytecode không tuân theo quy tắc của Java, JVM sẽ ném ra các ngoại lệ.
3. **Execute Code**: JVM thực thi mã bytecode theo thứ tự và thông dịch mã bytecode thành mã máy cho nền tảng cụ thể bằng cách sử dụng JIT (Just-In-Time compiler), trong quá trình thực thi có thể xảy ra lỗi. JIT compiler thực hiện công việc này nhằm cải thiện hiệu suất của ứng dụng.

![550x350](public/static/images/jvm-jdk-jre-trong-java-3.png)
# JRE (Java Runtime Environment) là gì ?

JRE là 1 phần mềm để chạy chương trình Java hay còn được gọi là môi trường thực thi cho các các ứng dụng Java, nó bao gồm JVM và các thư viện (libraries classes) + tài nguyên (resources, files, ...) cần thiết để có thể chạy được chương trình Java.

![](public/static/images/jvm-jdk-jre-trong-java-1.png)
# JDK (Java Development Kit)

JDK là bộ công cụ phát triển ứng dụng Java, nó bao gồm JRE và các công cụ cần thiết (Dev tools) để phát triển các ứng dụng Java. JDK thông thường sẽ chứa cả 2 phiên bản Java Enterprise Edition (Java EE) và Java Standard Edition (Java SE).

![](public/static/images/jvm-jdk-jre-trong-java-6.png)

# Sự khác nhau giữa JVM, JDK và JRE
- JVM là máy ảo thực thi mã bytecode.
- JRE là phần mềm chạy các ứng dụng Java (bao gồm JVM + các lớp thư viện)
- JDK là bộ công cụ phát triển các ứng dụng Java (bao gồm JRE)
# JDK, JRE và JVM hoạt động như thế nào khi chạy 1 chương trình Java ?

Giả sử trong folder hiện tại của chúng ta có 1 file HelloWorld.java như sau:
```java
public class HelloWorld {
	public static void main(String[] args){
		System.out.print("Hello, World!!");
	}
}
```

 Đầu tiên chúng ta sẽ biên dịch code Java trong file này thành bytecode bằng cách mở terminal và sử dụng trình biên dịch `javac` của JDK: 
```
javac HelloWorld.java
```
  Kết quả của quá trình biên dịch là tạo ra file **HelloWorld.class** chứa mã bytecode. (Lưu ý là JDK chỉ compile khi mà trong class có chứa hàm main, và tên file phải giống tên của class. Ngoài ra thì bắt buộc máy của bạn phải setup PATH environment variable cho JDK nữa nhé).

Tiếp theo, chúng ta sử dụng JRE để chạy chương trình:
```
java HelloWorld
```
Khi bạn chạy câu lệnh này có nghĩa là bạn đang yêu cầu JVM thực thi mã bytecode từ file **HelloWorld.class**, sau đó nó sẽ trả về kết quả của chương trình.

```
Hello, World!!
```
# Một số lưu ý nhỏ
- Nếu bạn chỉ cần chạy program Java thì JRE là đủ.
- Nếu muốn phát triển ứng dụng Java thì phải có JDK.
- Cài JRE thì ko cần phải setup PATH variable environment vẫn có thể dùng được lệnh `java`.
- Cài JDK thì bắt buộc phải setup PATH variable environment cho JDK mới sử dụng được lệnh `javac`.
- Nếu muốn sử dụng các tính năng mới trong các phiên bản Java mới nhất thì phải cài bộ JDK phù hợp với các phiên bản Java đó. Ví dụ Java version 21 thì sẽ cần bộ JDK  version 21.
- JDK, JRE phụ thuộc vào nền tảng còn JVM thì không.
