(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{383:function(t,a,s){"use strict";s.r(a);var n=s(40),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"java异常处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java异常处理"}},[t._v("#")]),t._v(" Java异常处理")]),t._v(" "),s("h3",{attrs:{id:"try-catch语句执行过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#try-catch语句执行过程"}},[t._v("#")]),t._v(" try-catch语句执行过程")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//正常执行的代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//出错后执行的代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//无论正常执行还是出错,之后都会执行的代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//跟上面try catch无关的代码")]),t._v("\n")])])]),s("p",[t._v("正常执行的代码如果出现异常,就不会执行出现异常语句后面的所有正常代码。\n异常可能会被捕获掉,比如上面catch声明的是捕获Exception,那么所有Exception包括子类都会被捕获,但如Error或者是Throwable但又不是Exception(Exception继承Throwable)就不会被捕获。如果异常被捕获,就会执行catch里面的代码.如果异常没有被捕获,就会往外抛出,相当于这整个方法出现了异常。\nfinally中的代码只要执行进了try catch永远都会被执行.执行完finally中的代码,如果异常被捕获就会执行外面跟这个try catch无关的代码.否则就会继续往外"),s("a",{attrs:{href:"https://www.baidu.com/s?wd=%E6%8A%9B%E5%87%BA%E5%BC%82%E5%B8%B8&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1YLP1fduAPWPWTduyR3ny7-0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3EPHD4P1bzPWc4PHmkP1D3Pjfd",target:"_blank",rel:"noopener noreferrer"}},[t._v("抛出异常"),s("OutboundLink")],1),t._v("，不会执行外面跟这个try catch无关的代码。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2.自定义异常")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FdException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResultEnum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UNKNOWN_ERROR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FdException")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printStackTrace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"异常被捕获不受异常影响继续执行"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    打印：\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("faduit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("riskwarn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exception"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("FdException")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 未知错误\n        异常被捕获不受异常影响继续执行\n")])])]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1.空指针异常")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),t._v(" map "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeMap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("putAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FdException")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printStackTrace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"异常没被捕获，抛出到外层方法，代码受影响不执行"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    打印：\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("NullPointerException")]),t._v("\n            at "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("TreeMap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("putAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeMap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("java"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("313")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("return无论在哪里,只要执行到就会返回,但唯一一点不同的是如果return在try或者catch中,即使返回了,最终finally中的代码都会被执行.这种情况最常用的是打开了某些资源后必须关闭,比如打开了一个OutputStream,那就应该在finally中关闭,这样无论有没有出现异常,都会被关闭。")]),t._v(" "),s("h3",{attrs:{id:"不捕获异常的情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不捕获异常的情况"}},[t._v("#")]),t._v(" 不捕获异常的情况")]),t._v(" "),s("p",[t._v("如果方法内部没有捕获异常，那么就会抛出到外层方法，外层再没有捕获就继续往外抛出。。。那么最终到哪里呢？")]),t._v(" "),s("p",[t._v("按照方法调用一层一层的向上传递，如果到达main方法还得不到处理，就被jvm捕获，则程序终止。")]),t._v(" "),s("p",[t._v("当Java虚拟机追溯到调用栈的底部的方法时，如果仍然没有找到处理该异常的代码块，将按以下步骤处理：\n1、调用异常对象的printStackTrace()方法，打印来自方法调用栈的异常信息。\n2、如果该线程不是主线程，那么终止这个线程，其他线程继续正常运行。如果该线程是主线程（即方法调用栈的底部为main()方法），那么整个应用程序被终止。")]),t._v(" "),s("h3",{attrs:{id:"throws作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#throws作用"}},[t._v("#")]),t._v(" throws作用")]),t._v(" "),s("p",[t._v("当一个方法产生一个它不处理的异常时，那么就需要在该方法的头部声明这个异常，以便将该异常传递到方法的外部进行处理。使用 throws 声明的方法表示此方法不处理异常。使用 throws 声明抛出异常的思路是，当前方法不知道如何处理这种类型的异常，该异常应该由向上一级的调用者处理。强制上一级捕获异常或者继续向上抛异常。")]),t._v(" "),s("h2",{attrs:{id:"throw-拋出异常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#throw-拋出异常"}},[t._v("#")]),t._v(" throw 拋出异常")]),t._v(" "),s("p",[t._v("与 throws 不同的是，throw 语句用来直接拋出一个异常，后接一个可拋出的异常类对象，其语法格式如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("throw ExceptionObject;\n")])])]),s("p",[t._v("其中，ExceptionObject 必须是 Throwable 类或其子类的对象。如果是自定义异常类，也必须是 Throwable 的直接或间接子类。例如，以下语句在编译时将会产生语法错误：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('throw new String("拋出异常");    // String类不是Throwable类的子类\n')])])]),s("p",[t._v("当 throw 语句执行时，它后面的语句将不执行，此时程序转向调用者程序，寻找与之相匹配的 catch 语句，执行相应的异常处理程序。如果没有找到相匹配的 catch 语句，则再转向上一层的调用程序。这样逐层向上，直到最外层的异常处理程序终止程序并打印出调用栈情况。")]),t._v(" "),s("p",[t._v("throw 关键字不会单独使用，它的使用完全符合异常的处理机制，但是，一般来讲用户都在避免异常的产生，所以不会手工抛出一个新的异常类的实例，而往往会抛出程序中已经产生的异常类的实例。")]),t._v(" "),s("p",[s("strong",[t._v("throws 关键字和 throw 关键字在使用上的几点区别如下")]),t._v("：")]),t._v(" "),s("ul",[s("li",[t._v("throws 用来声明一个方法可能抛出的所有异常信息，表示出现异常的一种可能性，但并不一定会发生这些异常；throw 则是指拋出的一个具体的异常类型，执行 throw 则一定抛出了某种异常对象。")]),t._v(" "),s("li",[t._v("通常在一个方法（类）的声明处通过 throws 声明方法（类）可能拋出的异常信息，而在方法（类）内部通过 throw 声明一个具体的异常信息。")]),t._v(" "),s("li",[t._v("throws 通常不用显示地捕获异常，可由系统自动将所有捕获的异常信息抛给上级方法； throw 则需要用户自己捕获相关的异常，而后再对其进行相关包装，最后将包装后的异常信息抛出。")])]),t._v(" "),s("p",[t._v("参考文献：")])])}),[],!1,null,null,null);a.default=e.exports}}]);