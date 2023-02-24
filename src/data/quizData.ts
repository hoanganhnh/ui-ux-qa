export interface Question {
  id: number;
  question: string;
  explain: string;
  correctAnswer: string;
  wrongAnswers: string[];
}

export interface Quiz {
  [key: string]: Question[];
}

export const Questions: Quiz = {
  vi: [
    {
      id: 0,
      question: "Design Thinking gồm có mấy bước?",
      explain:
        "Hình thức ngắn gọn của quá trình Design Thinking hay còn gọi là Tư duy Thiết kế có thể được trình bày rõ ràng trong năm bước hoặc giai đoạn, gồm có: Empathize (Đồng cảm), Define (Xác định), Ideate (Ý tưởng hóa), Tạo nguyên mẫu (Prototype) và Thử nghiệm (Test).",
      correctAnswer: "5",
      wrongAnswers: ["6", "4", "7"],
    },
    {
      id: 1,
      question: "Bước đầu tiên trong Design Thinking là ...",
      explain:
        "Empathize (Đồng cảm) là bước đầu tiên trong Tư duy Thiết kế vì nó là một kỹ năng cho phép chúng ta hiểu và chia sẻ những cảm xúc giống như những người khác. Thông qua sự đồng cảm, chúng ta có thể đặt mình vào vị trí của người khác và kết nối với cảm nhận của họ về vấn đề, hoàn cảnh hoặc tình huống của họ.",
      correctAnswer: "Empathize",
      wrongAnswers: ["Define", "Ideate", "Prototype"],
    },
    {
      id: 2,
      question: "Bước thứ hai trong Design Thinking là ...",
      explain:
        "Trong giai đoạn Xác định (Define), bạn tổng hợp các quan sát của mình về người dùng từ giai đoạn đầu tiên, giai đoạn Đồng cảm. Một định nghĩa tuyệt vời về tuyên bố vấn đề của bạn sẽ hướng dẫn bạn và nhóm của bạn làm việc và khởi động quá trình lên ý tưởng (giai đoạn thứ ba) theo đúng hướng. Năm giai đoạn không phải lúc nào cũng tuần tự — chúng không phải tuân theo bất kỳ thứ tự cụ thể nào và chúng thường có thể xảy ra song song và được lặp đi lặp lại nhiều lần. Như vậy, các giai đoạn nên được hiểu là các chế độ khác nhau góp phần vào một dự án, chứ không phải là các bước tuần tự.",
      correctAnswer: "Define",
      wrongAnswers: ["Test", "Ideate", "Prototype"],
    },
    {
      id: 3,
      question: "Bước thứ ba trong Design Thinking là ...",
      explain:
        "Ý tưởng hóa (Ideate) là một quá trình sáng tạo trong đó các nhà thiết kế tạo ra ý tưởng trong các phiên (ví dụ: brainstorming, ý tưởng tồi tệ nhất có thể). Đây là giai đoạn thứ ba trong quy trình Tư duy Thiết kế. Những người tham gia tập hợp với tinh thần cởi mở để đưa ra nhiều ý tưởng nhất có thể nhằm giải quyết một tuyên bố vấn đề trong một môi trường thuận lợi, không có sự phán xét.",
      correctAnswer: "Ideate",
      wrongAnswers: ["Prototype", "Empathize", "Define"],
    },
    {
      id: 4,
      question: "Bước thứ tư trong Design Thinking là ...",
      explain:
        "Nguyên mẫu (Prototype) là quá trình xây dựng mô hình thử nghiệm đơn giản của một giải pháp được đề xuất được sử dụng để kiểm tra hoặc xác thực ý tưởng, giả định thiết kế và các khía cạnh khác của khái niệm hóa một cách nhanh chóng và rẻ, để nhà thiết kế/những người tham gia có thể thực hiện các cải tiến phù hợp hoặc có thể thay đổi theo chỉ thị.",
      correctAnswer: "Prototype",
      wrongAnswers: ["Define", "Empathize", "Ideate"],
    },
    {
      id: 5,
      question: "Bước cuối cùng trong Design Thinking là ...",
      explain:
        "Thử nghiệm (Test) là giai đoạn thứ năm cũng là giai đoạn cuối trong quy trình tư duy thiết kế năm giai đoạn. Bạn thường thực hiện các bài kiểm tra cùng với giai đoạn tạo mẫu nguyên mẫu. Thông qua thử nghiệm, bạn có thể tìm hiểu thêm về người dùng của mình, cải thiện nguyên mẫu và thậm chí tinh chỉnh tuyên bố vấn đề của mình.",
      correctAnswer: "Test",
      wrongAnswers: ["Ideate", "Define", "Prototype"],
    },
    {
      id: 6,
      question: "UX là viết tắt của ...",
      explain:
        "Trải nghiệm Người dùng (UX viết tắt của cụm từ User experience) là cách người dùng tương tác và trải nghiệm một sản phẩm, hệ thống hoặc dịch vụ. Nó bao gồm nhận thức của một người về tiện ích, dễ sử dụng và hiệu quả. Cải thiện trải nghiệm người dùng là điều quan trọng đối với hầu hết các công ty, nhà thiết kế và người sáng tạo khi tạo và tinh chỉnh sản phẩm vì trải nghiệm người dùng tiêu cực có thể làm giảm việc sử dụng sản phẩm và do đó, làm giảm bất kỳ tác động tích cực mong muốn nào; ngược lại, thiết kế hướng tới lợi nhuận thường xung đột với các mục tiêu trải nghiệm người dùng có đạo đức và thậm chí gây hại. Trải nghiệm người dùng là chủ quan. Tuy nhiên, các thuộc tính tạo nên trải nghiệm người dùng là khách quan.",
      correctAnswer: "User Experience",
      wrongAnswers: ["User External", "User Extreme", "User Extra"],
    },
    {
      id: 7,
      question: "UI là viết tắt của ...",
      explain:
        "Giao diện Người dùng (UI viết tắt của cụm từ User Interface) là điểm tương tác và giao tiếp giữa người và máy tính trong một thiết bị. Điều này có thể bao gồm màn hình hiển thị, bàn phím, chuột và sự xuất hiện của máy tính để bàn. Nó cũng là cách mà người dùng tương tác với một ứng dụng hoặc một trang web.",
      correctAnswer: "User Interface",
      wrongAnswers: ["User Internal", "User Instinct", "User International"],
    },
    {
      id: 8,
      question: "Design Thinking dành cho ai?",
      explain:
        "Tư duy Thiết kế không phải là tài sản độc quyền của các nhà thiết kế — tất cả mọi người đều sử dụng nó. Vì lý do này, nó có thể khó phát triển, phân loại và sắp xếp các ý tưởng và giải pháp cho các vấn đề mà bạn cố gắng giải quyết. Một cách để bạn có thể giữ dự án đi đúng hướng và sắp xếp các ý tưởng cốt lõi là sử dụng phương pháp tư duy thiết kế — và mọi người đều có thể tham gia vào việc đó!",
      correctAnswer: "Tất cả mọi người",
      wrongAnswers: ["Thiết kế", "Kinh doanh", "Công nghệ"],
    },
    {
      id: 9,
      question: "Nguồn gốc của Design Thinking có từ năm nào?",
      explain:
        "Trước 1960 — Nguồn gốc của Tư duy Thiết kế nằm ở sự phát triển của các nghiên cứu tâm lý về sự sáng tạo vào những năm 1940 và sự phát triển của các kỹ thuật sáng tạo vào những năm 1950. Tư duy Thiết kế được tạo ra bởi vì các tập đoàn lớn thiếu khả năng sáng tạo và trong những trường hợp cực đoan, không thể tạo ra các sản phẩm và dịch vụ mới đáp ứng nhu cầu chưa được đáp ứng của khách hàng. Do hệ thống giáo dục của thế kỷ 20 khuyến khích logic thống trị và coi thường sự sáng tạo, mọi người lớn lên với một tư duy áp đảo và bộ kỹ năng quản lý giá trị.",
      correctAnswer: "Trước năm 1960",
      wrongAnswers: ["Sau năm 1960", "Trong năm 1960", "Từ năm 1940 đến 1950"],
    },
    {
      id: 10,
      question: "Jakob's Law trong UX nói về?",
      explain:
        "Jakob's Law (còn được gọi là “Định luật Jakob về trải nghiệm người dùng internet”) được đưa ra vào năm 2000 bởi chuyên gia về tính khả dụng Jakob Nielsen, người đã mô tả xu hướng người dùng phát triển kỳ vọng về các quy ước thiết kế dựa trên kinh nghiệm tích lũy của họ từ các trang web khác. Người dùng dành phần lớn thời gian của họ trên các trang web khác. Điều này có nghĩa là người dùng thích trang web của bạn hoạt động giống như tất cả các trang web khác mà họ đã biết.",
      correctAnswer: "Sự giống nhau",
      wrongAnswers: ["Thời gian", "Khoảng cách", "Tính thẩm mỹ"],
    },
    {
      id: 11,
      question: "Fitts's Law trong UX nói về?",
      explain:
        "Định luật Fitts (Fitts' Law) quy định rằng lượng thời gian cần thiết để một người di chuyển con trỏ (ví dụ: con trỏ chuột) đến khu vực mục tiêu là một hàm của khoảng cách đến mục tiêu chia cho kích thước của mục tiêu. Do đó, khoảng cách càng dài và kích thước của mục tiêu càng nhỏ thì càng mất nhiều thời gian. Tức là, thời gian để đạt được mục tiêu là một hàm của khoảng cách đến và kích thước của mục tiêu.",
      correctAnswer: "Thời gian",
      wrongAnswers: ["Khoảng cách", "Kích thước", "Trí nhớ"],
    },
    {
      id: 12,
      question: "Hick's Law trong UX nói về?",
      explain:
        "Định luật Hick (Hick's Law), hay định luật Hick — Hyman, được đặt theo tên của các nhà tâm lý học người Anh và người Mỹ William Edmund Hick và Ray Hyman, mô tả thời gian cần thiết để một người đưa ra quyết định do có nhiều lựa chọn: càng nhiều lựa chọn thì số lượng lựa chọn càng tăng thời gian đưa ra quyết định. Tức là, thời gian cần thiết để đưa ra quyết định tăng lên cùng với số lượng và độ phức tạp của các lựa chọn.",
      correctAnswer: "Sự đơn giản",
      wrongAnswers: ["Sự phản hồi", "Tính thẩm mỹ", "Trí nhớ"],
    },
    {
      id: 13,
      question: "Miller's Law trong UX nói về?",
      explain:
        "Định luật Miller (Miller's Law), một phần trong lý thuyết về giao tiếp của ông, được xây dựng bởi George A. Miller (từ năm 1920 đến năm 2012), Giáo sư Tâm lý học tại Đại học Princeton. Nó hướng dẫn chúng ta tạm dừng phán xét về những gì ai đó đang nói để trước tiên chúng ta có thể hiểu họ mà không thấm nhuần thông điệp của họ bằng những diễn giải cá nhân của chúng ta. Tức là, một người bình thường chỉ có thể giữ 7 mục (cộng hoặc trừ 2) trong bộ nhớ làm việc của họ.",
      correctAnswer: "Trí nhớ",
      wrongAnswers: ["Khoảng cách", "Tính thẩm mỹ", "Sự phức tạp"],
    },
    {
      id: 14,
      question: "Postel's Law trong UX nói về?",
      explain:
        "Định luật Postel hay còn gọi là Postel's Law (còn được gọi là nguyên tắc bền vững) được xây dựng bởi John Postel, một nhà khoa học CNTT người Mỹ. Bây giờ luật của ông được sử dụng làm cơ sở cho nhiều hướng dẫn phát triển phần mềm. Luật quy định: “hãy thận trọng trong những gì bạn làm, hãy tự do trong những gì bạn chấp nhận từ người khác.” Tức là, đồng cảm, linh hoạt và khoan dung với bất kỳ hành động nào mà người dùng có thể thực hiện hoặc bất kỳ thông tin đầu vào nào mà họ có thể cung cấp. Dự đoán hầu như mọi thứ về đầu vào, quyền truy cập và khả năng trong khi cung cấp giao diện đáng tin cậy và có thể truy cập. Chúng ta càng có thể dự đoán và lập kế hoạch trong thiết kế, thiết kế sẽ càng linh hoạt hơn. Chấp nhận đầu vào biến đổi từ người dùng, chuyển đổi đầu vào đó để rồi đáp ứng yêu cầu của bạn, xác định ranh giới cho đầu vào và cung cấp phản hồi rõ ràng cho người dùng.",
      correctAnswer: "Sự phản hồi",
      wrongAnswers: ["Sự khác biệt", "Sự phức tạp", "Tính thẩm mỹ"],
    },
    {
      id: 15,
      question: "Peak-End Rule trong UX nói về?",
      explain:
        "Quy tắc Đỉnh-Kết thúc (hay còn gọi là Peak-End Rule) là một xu hướng nhận thức thay đổi cách các cá nhân nhớ lại các sự kiện và ký ức trong quá khứ. Dựa trên quy tắc đỉnh-kết thúc, các cá nhân đánh giá một trải nghiệm trong quá khứ dựa trên những đỉnh cao cảm xúc được cảm nhận trong suốt trải nghiệm và kết thúc trải nghiệm. Tức là, mọi người đánh giá một trải nghiệm chủ yếu dựa trên cảm giác của họ ở đỉnh cao và cuối cùng, chứ không phải là tổng số hoặc trung bình của mọi khoảnh khắc của trải nghiệm.",
      correctAnswer: "Trải nghiệm",
      wrongAnswers: ["Trí nhớ", "Sự khác biệt", "Sự phức tạp"],
    },
    {
      id: 16,
      question: "Aesthetic-Usability Effect trong UX nói về?",
      explain:
        "Hiệu ứng Thẩm mỹ-Tính khả dụng (hay còn gọi là Aesthetic-Usability Effect) sử dụng đề cập đến xu hướng người dùng cảm nhận các sản phẩm hấp dẫn là có thể sử dụng được nhiều hơn. Mọi người có xu hướng tin rằng những thứ trông đẹp hơn sẽ hoạt động tốt hơn — ngay cả khi chúng không thực sự hiệu quả hoặc hiệu quả hơn. Tức là, người dùng thường coi thiết kế đẹp mắt về mặt thẩm mỹ là thiết kế có thể sử dụng được nhiều hơn.",
      correctAnswer: "Tính thẩm mỹ",
      wrongAnswers: ["Sự khác biệt", "Sự phức tạp", "Trí nhớ"],
    },
    {
      id: 17,
      question: "Von Restorff Effect trong UX nói về?",
      explain:
        "Hiệu ứng Von Restorff (hay còn gọi là Von Restorff Effect), còn được gọi với cách gọi khác nữa là “hiệu ứng cô lập”, nói về dự đoán rằng khi có nhiều kích thích đồng nhất xuất hiện, kích thích khác với phần còn lại sẽ có nhiều khả năng được ghi nhớ hơn. Tức là, dấu hiệu nào khác biệt hơn so với các dấu hiệu còn lại thì dấu hiệu khác biệt đó sẽ được ghi nhớ tốt hơn.",
      correctAnswer: "Sự khác biệt",
      wrongAnswers: ["Sự phức tạp", "Thời gian", "Khoảng cách"],
    },
    {
      id: 18,
      question: "Tesler's Law trong UX nói về?",
      explain:
        "Định luật Tesler, còn được gọi là Định luật của Sự bảo toàn của Sự phức tạp, phát biểu rằng đối với bất kỳ hệ thống nào cũng có một mức độ phức tạp nhất định không thể giảm bớt. Bạn có thể hiểu rằng trong tương tác giữa người và máy tính thì mọi ứng dụng đều có một mức độ phức tạp cố hữu không thể loại bỏ hoặc ẩn đi và việc của nhà phát triển cần đảm bảo giảm nhẹ độ phức tạp bằng cách hiển thị một cách tối ưu.",
      correctAnswer: "Sự phức tạp",
      wrongAnswers: ["Thời gian phản hồi", "Trí nhớ", "Khoảng cách"],
    },
    {
      id: 19,
      question: "Doherty Threshold trong UX nói về?",
      explain:
        "Được hình thành bởi Walter Doherty và Ahrvind Thadani, Doherty Threshold hay còn gọi là Ngưỡng ngạch Doherty đây là một mục tiêu để giữ cho người dùng hoàn toàn gắn bó khi tương tác với máy tính. Theo một nghiên cứu được thực hiện vào cuối những năm 1970, nếu một phản hồi xuất hiện sau ngưỡng 400 mili giây, thì người dùng cuối cùng sẽ không còn quan tâm nữa. Ngưỡng ngạch Doherty quy định rằng trải nghiệm người dùng chuyển từ khó chịu sang gây nghiện sau khi thời gian phản hồi của hệ thống giảm xuống dưới 400 mili giây.",
      correctAnswer: "Thời gian phản hồi",
      wrongAnswers: ["Trí nhớ", "Khoảng cách", "Kích thước"],
    },
  ],
  en: [
    {
      id: 0,
      question: "How many steps does Design Thinking include?",
      explain:
        "The brief form of the Design Thinking process, can be clearly presented in five steps or stages, including: Empathize, Define, Ideate, Prototyping, and Testing.",
      correctAnswer: "5",
      wrongAnswers: ["6", "4", "7"],
    },
    {
      id: 1,
      question: "The first step in Design Thinking is ...",
      explain:
        "Empathize is the first step in Design Thinking because it's a skill that allows us to understand and share the same emotions as others. Through empathy, we can put ourselves together. Put the other person in their shoes and connect with how they feel about their problem, situation, or situation.",
      correctAnswer: "Empathize",
      wrongAnswers: ["Define", "Ideate", "Prototype"],
    },
    {
      id: 2,
      question: "The second step in Design Thinking is ...",
      explain:
        "In the Define stage, you synthesize your observations of the user from the first stage, the Empathy stage. A great definition of your problem statement guides you and the team. your work and kickstart your ideation process (third stage) in the right direction.The five stages are not always sequential — they don't have to be in any particular order, and they can often be. occur in parallel and are repeated over and over. As such, phases should be understood as different modes of contribution to a project, not as sequential steps.",
      correctAnswer: "Define",
      wrongAnswers: ["Test", "Ideate", "Prototype"],
    },
    {
      id: 3,
      question: "The third step in Design Thinking is ...",
      explain:
        "Ideate is a creative process in which designers generate ideas in sessions (e.g. brainstorming, worst possible idea.) This is the third stage in the Design Thinking process. Participants gather with an open mind to generate as many ideas as possible to solve a problem statement in a favorable, judgment-free environment.",
      correctAnswer: "Ideate",
      wrongAnswers: ["Prototype", "Empathize", "Define"],
    },
    {
      id: 4,
      question: "The fourth step in Design Thinking is ...",
      explain:
        "Prototype is the process of building a simple test model of a proposed solution that is used to test or validate ideas, design assumptions, and other aspects of conceptualizing a fast and cheap way, so that designers/participants can make appropriate or changeable improvements according to directives.",
      correctAnswer: "Prototype",
      wrongAnswers: ["Define", "Empathize", "Ideate"],
    },
    {
      id: 5,
      question: "The final step in Design Thinking is ...",
      explain:
        "Testing is the fifth and final stage of the five-stage Design Thinking process. You usually run tests along with the prototyping phase. Through testing, you You can learn more about your users, improve your prototype, and even refine your problem statement.",
      correctAnswer: "Test",
      wrongAnswers: ["Ideate", "Define", "Prototype"],
    },
    {
      id: 6,
      question: "UX stands for ...",
      explain:
        "User experience (UX stands for User experience) is how a user interacts and experiences a product, system or service. It includes a person's perception of utility, ease of use and Improving user experience is important for most companies, designers and creators when creating and refining products because a negative user experience can reduce product usage product and, therefore, reduce any desired positive impact; conversely, profit-driven design often conflicts with ethical and even harmful user experience goals. is subjective. However, the attributes that make up the user experience are objective.",
      correctAnswer: "User Experience",
      wrongAnswers: ["User External", "User Extreme", "User Extra"],
    },
    {
      id: 7,
      question: "UI stands for ...",
      explain:
        "A User Interface (UI stands for User Interface) is the point of interaction and communication between a person and a computer in a device. This may include a display screen, keyboard, mouse, and output desktop performance. It's also how a user interacts with an application or a website.",
      correctAnswer: "User Interface",
      wrongAnswers: ["User Internal", "User Instinct", "User International"],
    },
    {
      id: 8,
      question: "Who is Design Thinking for?",
      explain:
        "Design Thinking is not the exclusive property of designers — everyone uses it. For this reason, it can be difficult to develop, categorize, and organize ideas and solutions. for the problems you're trying to solve One way you can keep the project on track and align with the core ideas is to use design thinking — and everyone can be a part of it that work!",
      correctAnswer: "Everyone",
      wrongAnswers: ["Design", "Business", "Technology"],
    },
    {
      id: 9,
      question: "What year is the origin of Design Thinking?",
      explain:
        "Before 1960 — The origins of Design Thinking lie in the development of psychological studies of creativity in the 1940s and the development of creative techniques in the 1950s. created because large corporations lack the ability to innovate and, in extreme cases, cannot create new products and services that meet unmet customer needs. 20th century encouraged logic to dominate and belittle creativity, people grew up with an overwhelming mindset and value management skill set.",
      correctAnswer: "Before 1960",
      wrongAnswers: ["After 1960", "During 1960", "From 1940 to 1950"],
    },
    {
      id: 10,
      question: "What does Jakob's Law in UX talk about?",
      explain:
        "Jakob's Law (also known as “Jakob's Law of Internet User Experience”) was coined in 2000 by usability expert Jakob Nielsen, who described the tendency of users to develop expectations about design conventions are based on their accumulated experience from other websites. Users spend most of their time on other websites. This means that users prefer your site to behave like all other sites they already know.",
      correctAnswer: "Similarity",
      wrongAnswers: ["Time", "Distance", "Aesthetic"],
    },
    {
      id: 11,
      question: "What does Fitts's Law in UX talk about?",
      explain:
        "Fitts' Law states that the amount of time it takes for a person to move the cursor (e.g. mouse pointer) to the target area is a function of the distance to the target divided by the size of the target area. Therefore, the longer the distance and the smaller the size of the target, the longer it takes. That is, the time to reach the goal is a function of the distance to and the size of the target.",
      correctAnswer: "Time",
      wrongAnswers: ["Distance", "Size", "Memory"],
    },
    {
      id: 12,
      question: "What does Hick's Law in UX talk about?",
      explain:
        "Hick's Law, or Hick-Hyman's law, named after the British and American psychologists William Edmund Hick and Ray Hyman, describes the time it takes for a person to make a decision. Multi-choice decision: the more options, the higher the number of choices, the more time it takes to make the decision select.",
      correctAnswer: "Simple",
      wrongAnswers: ["Feedback", "Aesthetic", "Memory"],
    },
    {
      id: 13,
      question: "What does Miller's Law in UX talk about?",
      explain:
        "Miller's Law, part of his theory of communication, was formulated by George A. Miller (1920 to 2012), Professor of Psychology at Princeton University. It guides we pause to judge what someone is saying so that we can first understand them without imbuing their message with our own personal interpretations keep 7 items (plus or minus 2) in their working memory.",
      correctAnswer: "Memory",
      wrongAnswers: ["Distance", "Aesthetic", "Complexity"],
    },
    {
      id: 14,
      question: "What does Postel's Law in UX talk about?",
      explain:
        "Postel's Law (also known as the sustainability principle) was formulated by John Postel, an American IT scientist. Now his law is used as the basis for many guidelines. The law says: “be prudent in what you do, be free in what you accept from others.” That is, empathetic, flexible, and tolerant of any action a user may take or any input they may provide. access and capabilities while providing a reliable and accessible interface. The more predictable and planned we can be in the design, the more flexible the design will be. Accept variable input from user, transform that input to then respond to your request, define boundaries for the input, and provide clear feedback to the user.",
      correctAnswer: "Feedback",
      wrongAnswers: ["Difference", "Complexity", "Aesthetic"],
    },
    {
      id: 15,
      question: "What is the Peak-End Rule in UX about?",
      explain:
        "The Peak-End Rule is a cognitive bias that changes the way individuals recall past events and memories. Based on the peak-end rule, individuals rate a past experience based on the emotional peaks felt during and at the end of the experience, that is, people judge an experience primarily based on how they felt in culmination and finality, rather than the sum or average of every moment of experience.",
      correctAnswer: "Experience",
      wrongAnswers: ["Memory", "Difference", "Complexity"],
    },
    {
      id: 16,
      question: "What is the Aesthetic-Usability Effect in UX about?",
      explain:
        "Aesthetic-Usability Effect refers to the tendency of users to perceive attractive products as more usable. People tend to believe that things that look better will work better — even if they aren't really as efficient or effective, that is, users often view aesthetically pleasing design as design that can be used a lot than.",
      correctAnswer: "Aesthetic",
      wrongAnswers: ["Difference", "Complexity", "Memory"],
    },
    {
      id: 17,
      question: "What does the Von Restorff Effect in UX talk about?",
      explain:
        "The Von Restorff effect, also known as the 'isolation effect', is about the prediction that when multiple identical stimuli are present, the stimulus differs from the other. the rest will be more likely to be remembered. That is, the sign that is different from the rest will be remembered better.",
      correctAnswer: "Difference",
      wrongAnswers: ["Complexity", "Time", "Distance"],
    },
    {
      id: 18,
      question: "Tesler's Law in UX about?",
      explain:
        "Tesler's Law, also known as the Law of Conservation of Complexity, states that for any system there is a certain degree of complexity that cannot be reduced. You can understand that in when it comes to human-computer interaction, every application has an inherent level of complexity that cannot be eliminated or hidden, and it is the developer's job to ensure that the complexity is mitigated by optimally displaying it.",
      correctAnswer: "Complexity",
      wrongAnswers: ["Response Time", "Memory", "Distance"],
    },
    {
      id: 19,
      question: "Doherty Threshold in UX talk about?",
      explain:
        "Conceived by Walter Doherty and Ahrvind Thadani, the Doherty Threshold is a goal to keep users fully engaged when interacting with computers. According to a study conducted late in the day In the 1970s, if a response came after the 400 millisecond threshold, the end user would no longer care. The Doherty threshold stipulates that the user experience turns from annoying to addictive after the response system time drops below 400 milliseconds.",
      correctAnswer: "Response Time",
      wrongAnswers: ["Memory", "Distance", "Size"],
    },
  ],
  jp: [
    {
      id: 0,
      question: "Design Thinking にはいくつのステップが含まれますか?",
      explain:
        "Design Thinking プロセスの簡単な形式は、5 つのステップまたは段階で明確に提示できます。1. Empathize、2. Define、3. Ideate、4. Prototyping、および 5. Testing。",
      correctAnswer: "5",
      wrongAnswers: ["6", "4", "7"],
    },
    {
      id: 1,
      question: "Design Thinking の第一歩は ...",
      explain:
        "Empathize は Design Thinking の第一歩です。なぜなら、それは私たちが他の人と同じ感情を理解し、共有することを可能にするスキルだからです。共感を通じて、私たちは自分自身をまとめることができます。相手を自分の立場に置き、自分の問題、状況、状況について相手がどのように感じているかにつながります。",
      correctAnswer: "Empathize",
      wrongAnswers: ["Define", "Ideate", "Prototype"],
    },
    {
      id: 2,
      question: "Design Thinking の第二段階は ...",
      explain:
        "Define 段階では、最初の段階である共感段階からのユーザーの観察を統合します。問題ステートメントの優れた定義は、あなたとチームを導きます。5 つの段階は常に連続しているわけではありません。特定の順序である必要はありません. 並行して発生し、何度も繰り返されます。そのため、フェーズは、一連のステップとしてではなく、プロジェクトへの貢献のさまざまなモードとして理解する必要があります。",
      correctAnswer: "Define",
      wrongAnswers: ["Test", "Ideate", "Prototype"],
    },
    {
      id: 3,
      question: "Design Thinking の第3ステップは ...",
      explain:
        "Ideate は、デザイナーがセッションでアイデアを生成する創造的なプロセスです (例: ブレインストーミング、最悪の可能性のあるアイデア)。これは、Design Thinking プロセスの第 3 段階です. 参加者は、好意的で判断のない環境で、問題ステートメントを解決するためにできるだけ多くのアイデアを生み出すために、オープンマインドで集まります。",
      correctAnswer: "Ideate",
      wrongAnswers: ["Prototype", "Empathize", "Define"],
    },
    {
      id: 4,
      question: "Design Thinking の第4ステップは ...",
      explain:
        "Prototype は、提案されたソリューションの単純なテスト モデルを構築するプロセスであり、アイデア、設計の仮定、および迅速かつ安価な方法を概念化するその他の側面をテストまたは検証するために使用されます。これにより、設計者/参加者は、適切または変更可能な改善を行うことができます。 指令に従って。",
      correctAnswer: "Prototype",
      wrongAnswers: ["Define", "Empathize", "Ideate"],
    },
    {
      id: 5,
      question: "Design Thinking の最終ステップは ...",
      explain:
        "テストは、5 段階 Design Thinking プロセスの 5 番目で最後の段階です。 通常、プロトタイピング フェーズと一緒にテストを実行します。 テストを通じて、ユーザーについて詳しく知り、プロトタイプを改善し、問題の説明を改善することさえできます。",
      correctAnswer: "Test",
      wrongAnswers: ["Ideate", "Define", "Prototype"],
    },
    {
      id: 6,
      question: "UXは ... の略です",
      explain:
        "User experience (UX は User experience) の略) は、ユーザーがどのように製品、システム、またはサービスと対話し、体験するかを表します。 これには、実用性、使いやすさに対する個人の認識が含まれます。ユーザー エクスペリエンスの向上は、ほとんどの企業、デザイナー、およびクリエイターにとって、製品を作成および改良する際に重要です。これは、マイナスのユーザー エクスペリエンスが製品の使用率を低下させ、したがって、望ましいプラスの影響を減少させる可能性があるためです。 逆に、利益重視のデザインは、倫理的で有害なユーザー エクスペリエンスの目標と矛盾することがよくあります。 主観的です。 ただし、ユーザー エクスペリエンスを構成する属性は客観的なものです。",
      correctAnswer: "User Experience",
      wrongAnswers: ["User External", "User Extreme", "User Extra"],
    },
    {
      id: 7,
      question: "UIは ... の略です",
      explain:
        "User Interface (UI は User Interface の略) は、デバイス内の人とコンピューターの間の対話および通信のポイントです。 これには、ディスプレイ画面、キーボード、マウス、および出力デスクトップのパフォーマンスが含まれる場合があります。 また、ユーザーがアプリケーションや Web サイトと対話する方法でもあります。",
      correctAnswer: "User Interface",
      wrongAnswers: ["User Internal", "User Instinct", "User International"],
    },
    {
      id: 8,
      question: "Design Thinking は誰のため?",
      explain:
        "Design Thinking はデザイナーの独占的な財産ではなく、誰もが使用しています。 このため、アイデアや解決策を開発、分類、整理することが難しい場合があります。 あなたが解決しようとしている問題に対して プロジェクトを軌道に乗せ、核となるアイデアと一致させる方法の 1 つは、デザイン思考を使用することです。",
      correctAnswer: "みんな",
      wrongAnswers: ["デザイン", "仕事", "テクノロジー"],
    },
    {
      id: 9,
      question: "Design Thinking の発祥は何年?",
      explain:
        "1960 年以前 — Design Thinking の起源は、1940 年代の創造性に関する心理学的研究の発展と、1950 年代の創造的技法の発展にあります。 大企業には革新する能力がなく、極端な場合、満たされていない顧客のニーズを満たす新しい製品やサービスを作成できないためです。 20世紀は、論理が創造性を支配し軽視することを奨励し、人々は圧倒的な考え方と価値管理スキルセットを持って成長しました。",
      correctAnswer: "1960 年以前",
      wrongAnswers: ["1960 年以降", "1960 年中", "1940 年から 1950 年まで"],
    },
    {
      id: 10,
      question: "UX の Jakob's Law は何について語っていますか?",
      explain:
        "Jakob's Law (別名 “Jakob's Law of Internet User Experience”) は、ユーザビリティの専門家であるヤコブ ニールセンによって 2000 年に考案されました。 他のウェブサイトからの蓄積された経験に基づいています。 ユーザーはほとんどの時間を他の Web サイトで過ごします。 つまり、ユーザーは、あなたのサイトが既に知っている他のすべてのサイトと同じように動作することを好みます。",
      correctAnswer: "類似性",
      wrongAnswers: ["時間", "距離", "美的"],
    },
    {
      id: 11,
      question: "UX の Fitts's Law は何について語っていますか?",
      explain:
        "Fitts' Law は、人がカーソル (マウス ポインターなど) をターゲット領域に移動するのにかかる時間は、ターゲットまでの距離をターゲット領域のサイズで割った関数であると述べています。 、距離が長く、ターゲットのサイズが小さいほど、時間がかかります. つまり、ゴールに到達するまでの時間は、ターゲットまでの距離とターゲットのサイズの関数です.",
      correctAnswer: "時間",
      wrongAnswers: ["距離", "サイズ", "メモリー"],
    },
    {
      id: 12,
      question: "UX の Hick's Law は何について語っていますか?",
      explain:
        "Hick's Law, or Hick-Hyman's law, named after the British and American psychologists Hick's Law、または Hick-Hyman's law は、イギリスとアメリカの心理学者 William Edmund Hick と Ray Hyman にちなんで名付けられたもので、人が精神を形成するのにかかる時間を表しています。 決断。 複数選択の決定: 選択肢が多いほど、選択肢の数が多くなり、決定を選択するのにかかる時間が長くなります。",
      correctAnswer: "単純",
      wrongAnswers: ["フィードバック", "美的", "メモリー"],
    },
    {
      id: 13,
      question: "UX における Miller's Law は何について語っていますか?",
      explain:
        "彼のコミュニケーション理論の一部である Miller's Law は、George A. Miller (1920 年から 2012 年)、Princeton University の心理学教授によって策定されました。 誰かが言っていることを判断するために一時停止することで、メッセージに私たち自身の個人的な解釈を吹き込むことなく最初に理解できるようになり、ワーキングメモリに7項目 (プラスまたはマイナス2) を保持します.",
      correctAnswer: "メモリー",
      wrongAnswers: ["距離", "美的", "複雑"],
    },
    {
      id: 14,
      question: "UX の Postel's Law は何について語っていますか?",
      explain:
        "Postel's Law (持続可能性原則とも呼ばれる) は、アメリカのIT科学者であるジョン・ポステルによって策定されました。 現在、彼の法則は多くのガイドラインの基礎として使用されています。 律法は次のように述べています。 つまり、共感的で、柔軟性があり、ユーザーが実行する可能性のある行動やユーザーが提供する可能性のある入力に対して寛容です。 信頼性の高いアクセス可能なインターフェイスを提供しながら、アクセスと機能を提供します。 より予測可能で計画的な設計ができるほど、設計はより柔軟になります。 ユーザーからの変数入力を受け入れ、その入力を変換してリクエストに応答し、入力の境界を定義し、ユーザーに明確なフィードバックを提供します。",
      correctAnswer: "フィードバック",
      wrongAnswers: ["違い", "複雑", "美的"],
    },
    {
      id: 15,
      question: "UX の Peak-End Rule とは何ですか?",
      explain:
        "Peak-End Rule は、個人が過去の出来事や記憶を思い出す方法を変える認知バイアスです。 ピークエンド ルールに基づいて、個人は経験中および経験の終わりに感じた感情的なピークに基づいて過去の経験を評価します。 または経験のすべての瞬間の平均。",
      correctAnswer: "経験",
      wrongAnswers: ["メモリー", "違い", "複雑"],
    },
    {
      id: 16,
      question: "UX における Aesthetic-Usability Effect とは何ですか?",
      explain:
        "Aesthetic-Usability Effect とは、ユーザーが魅力的な製品をより使いやすいと認識する傾向を指します。 人々は見た目が良いものほどうまく機能すると信じる傾向があります — 実際にはそれほど効率的または効果的でなくても、つまり、ユーザーは美的に満足できるデザインをより多く使用できるデザインと見なすことがよくあります。",
      correctAnswer: "美的",
      wrongAnswers: ["違い", "複雑", "メモリー"],
    },
    {
      id: 17,
      question: "UXにおける Von Restorff Effect は何について語っていますか?",
      explain:
        "The Von Restorff Effect は、'isolation effect' としても知られ、複数の同じ刺激が存在する場合、刺激が他の刺激とは異なるという予測に関するものです。 残りは記憶される可能性が高くなります。 つまり、残りの記号とは異なる記号がよりよく記憶されます。",
      correctAnswer: "違い",
      wrongAnswers: ["複雑", "時間", "距離"],
    },
    {
      id: 18,
      question: "Tesler's Law UX について?",
      explain:
        "Tesler's Law は、Law of Conservation of Complexity としても知られ、どのシステムにも、削減できないある程度の複雑さが存在すると述べています。 人間とコンピューターのやり取りに関して言えば、すべてのアプリケーションには排除したり隠したりできない固有のレベルの複雑さがあり、それを最適に表示して複雑さを軽減するのは開発者の仕事です。",
      correctAnswer: "複雑",
      wrongAnswers: ["反応時間", "メモリー", "距離"],
    },
    {
      id: 19,
      question: "Doherty Threshold についての UX の話は?",
      explain:
        "Walter Doherty と Ahrvind Thadani によって考案された Doherty Threshold 別名 Doherty Threshold は、コンピューターと対話するときにユーザーを完全に関与させ続けることを目標としています。 1970 年代の深夜に実施された調査によると、応答が 400 ミリ秒のしきい値を超えた場合、エンド ユーザーは気にしなくなります。Doherty しきい値は、応答システムの時間が低下した後、ユーザー エクスペリエンスが煩わしさから中毒性に変わることを規定しています。 400ミリ秒未満。",
      correctAnswer: "反応時間",
      wrongAnswers: ["メモリー", "距離", "サイズ"],
    },
  ],
  cn: [
    {
      id: 0,
      question: "Design Thinking 包括多少步骤?",
      explain:
        "Design Thinking 过程的简要形式，可以清楚地分为五个步骤或阶段，包括: 1. Empathize, 2. Define, 3. Ideate, 4. Prototyping, 和 5. Testing.",
      correctAnswer: "5",
      wrongAnswers: ["6", "4", "7"],
    },
    {
      id: 1,
      question: "Design Thinking 的第一步是 ...",
      explain:
        "Empathize 是 Design Thinking 的第一步，因为它是一种让我们能够理解并与他人分享相同情感的技能。 通过同理心，我们可以团结一致。 设身处地为他人着想，了解他们对自己的问题、处境或处境的感受。",
      correctAnswer: "Empathize",
      wrongAnswers: ["Define", "Ideate", "Prototype"],
    },
    {
      id: 2,
      question: "Design Thinking 的第二步是 ...",
      explain:
        "在 Define  阶段，您综合了第一阶段 Empathy 阶段对用户的观察。 很好地定义问题陈述可以指导您和团队。 你的工作并在正确的方向上启动你的构思过程（第三阶段）。这五个阶段并不总是连续的——它们不必按任何特定的顺序排列，而且通常可以。 并行发生并一遍又一遍地重复。 因此，阶段应该被理解为对项目的不同贡献模式，而不是连续的步骤。",
      correctAnswer: "Define",
      wrongAnswers: ["Test", "Ideate", "Prototype"],
    },
    {
      id: 3,
      question: "Design Thinking 的第三步是 ...",
      explain:
        "Ideate 是一个创造性的过程，设计师在会议中产生想法（例如头脑风暴，最糟糕的想法）。这是 Design Thinking 过程的第三个阶段。 参与者以开放的心态聚集在一起，在有利的、无判断力的环境中产生尽可能多的想法来解决问题陈述。",
      correctAnswer: "Ideate",
      wrongAnswers: ["Prototype", "Empathize", "Define"],
    },
    {
      id: 4,
      question: "Design Thinking 的第四步是 ...",
      explain:
        "Prototype 是为所提出的解决方案构建简单测试模型的过程，该模型用于测试或验证想法、设计假设和概念化的其他方面，这是一种快速且廉价的方式，以便设计者/参与者可以做出适当的或可更改的改进 根据指示。",
      correctAnswer: "Prototype",
      wrongAnswers: ["Define", "Empathize", "Ideate"],
    },
    {
      id: 5,
      question: "Design Thinking 的最后一步是 ...",
      explain:
        "Testing 是五个阶段 Design Thinking 流程的第五个也是最后一个阶段。 您通常会在原型设计阶段运行测试。 通过测试，您可以更多地了解您的用户，改进您的原型，甚至改进您的问题陈述。",
      correctAnswer: "Test",
      wrongAnswers: ["Ideate", "Define", "Prototype"],
    },
    {
      id: 6,
      question: "UX 代表 ...",
      explain:
        "User experience (UX 代表 User experience) 是用户如何交互和体验产品、系统或服务。 它包括一个人对实用性、易用性和改善用户体验的看法，这对大多数公司、设计师和创作者在创建和改进产品时都很重要，因为负面的用户体验会减少产品的使用，从而减少任何期望的积极影响； 相反，以利润为导向的设计往往与道德甚至有害的用户体验目标相冲突。 是主观的。 然而，构成用户体验的属性是客观的。",
      correctAnswer: "User Experience",
      wrongAnswers: ["User External", "User Extreme", "User Extra"],
    },
    {
      id: 7,
      question: "UI 代表 ...",
      explain:
        "User Interface (UI 代表 User Interface) 是设备中人与计算机交互和通信的点。这可能包括显示屏、键盘、鼠标和输出 桌面性能。这也是用户与应用程序或网站交互的方式。",
      correctAnswer: "User Interface",
      wrongAnswers: ["User Internal", "User Instinct", "User International"],
    },
    {
      id: 8,
      question: "谁是 Design Thinking?",
      explain:
        "Design Thinking 不是设计师的专属财产——每个人都在使用它。 因此，可能很难开发、分类和组织想法和解决方案。 对于您要解决的问题，使项目保持在正轨并与核心思想保持一致的一种方法是使用设计思维——每个人都可以参与其中并发挥作用！",
      correctAnswer: "每个人",
      wrongAnswers: ["设计", "商业", "技术"],
    },
    {
      id: 9,
      question: "Design Thinking 起源于哪一年?",
      explain:
        "1960年以前—— Design Thinking 起源于40年代创造力心理学研究的发展和50年代创造力技术的发展。 之所以创建，是因为大公司缺乏创新能力，在极端情况下，无法创造新产品和服务来满足未满足的客户需求。 20 世纪鼓励逻辑主导和贬低创造力，人们在成长过程中拥有压倒性的心态和价值管理技能。",
      correctAnswer: "1960 年前",
      wrongAnswers: ["1960 年后", "1960 年期间", "从 1940 年到 1950 年"],
    },
    {
      id: 10,
      question: "UX 中的 Jakob's Law 讲的是什么?",
      explain:
        "Jakob's Law (也称为 “Jakob's Law of Internet User Experience”) 由可用性专家 Jakob Nielsen 于 2000 年提出，他描述了用户倾向于根据他们从其他网站积累的经验对设计惯例产生期望 . 用户将大部分时间花在其他网站上。 这意味着用户更喜欢您的网站与他们已知的所有其他网站一样。",
      correctAnswer: "相似",
      wrongAnswers: ["时间", "距离", "审美的"],
    },
    {
      id: 11,
      question: "UX 中的 Fitts's Law 讲的是什么?",
      explain:
        "Fitts' Law 指出，一个人将光标（例如鼠标指针）移动到目标区域所花费的时间是到目标的距离除以目标区域大小的函数。 因此，距离越远，目标越小，所需时间越长。 也就是说，到达目标的时间是到目标的距离和目标大小的函数。",
      correctAnswer: "时间",
      wrongAnswers: ["距离", "Size", "记忆"],
    },
    {
      id: 12,
      question: "UX 中的 Hick's Law 讲的是什么?",
      explain:
        "Hick's Law, 或 Hick-Hyman's law, 以英美心理学家 William Edmund Hick 和 Ray Hyman 的名字命名，描述了一个人做出某件事所需要的时间 决定。 多选决策：选项越多，选择的次数越多，做出决策选择的时间就越长。",
      correctAnswer: "简单的",
      wrongAnswers: ["反馈", "审美的", "记忆"],
    },
    {
      id: 13,
      question: "UX 中的 Miller's Law 讲的是什么?",
      explain:
        "Miller's Law, 他的沟通理论的一部分，由 George A. Miller (1920 年至 2012 年), Princeton University 的心理学教授制定。 它引导我们停下来判断某人在说什么，这样我们就可以首先理解他们，而不用我们自己的个人解释来灌输他们的信息。在他们的工作记忆中保留 7 个项目（正负 2)。",
      correctAnswer: "记忆",
      wrongAnswers: ["距离", "审美的", "复杂"],
    },
    {
      id: 14,
      question: "UX 中的 Postel's Law 讲的是什么?",
      explain:
        "Postel's Law (也称为可持续性原则) 由美国 IT 科学家 John Postel 制定。 现在他的法律被用作许多指导方针的基础。 律曰：“谨为所为，随心所受。” 也就是说，对用户可能采取的任何行动或他们可能提供的任何输入具有同理心、灵活性和容忍度。 访问和功能，同时提供可靠且可访问的界面。 我们在设计中的可预测性和计划性越强，设计就越灵活。 接受来自用户的可变输入，转换该输入以响应您的请求，定义输入的边界，并向用户提供明确的反馈。",
      correctAnswer: "反馈",
      wrongAnswers: ["区别", "复杂", "审美的"],
    },
    {
      id: 15,
      question: "UX 中的 Peak-End Rule 是关于什么的?",
      explain:
        "Peak-End Rule 是一种认知偏差，它会改变个人回忆过去事件和记忆的方式。 根据峰终法则，个人根据体验期间和结束时感受到的情绪高峰来评价过去的体验，也就是说，人们主要根据他们在高潮和终结时的感受来判断体验，而不是总和 或每一刻体验的平均值。",
      correctAnswer: "经验",
      wrongAnswers: ["记忆", "区别", "复杂"],
    },
    {
      id: 16,
      question: "UX 中的 Aesthetic-Usability Effect 是关于什么的?",
      explain:
        "Aesthetic-Usability Effect 是指用户倾向于认为有吸引力的产品更有用。 人们倾向于相信看起来更好的东西会更好用——即使它们实际上并没有那么高效或有效，也就是说，用户通常将美观的设计视为可以大量使用的设计。",
      correctAnswer: "审美的",
      wrongAnswers: ["区别", "复杂", "记忆"],
    },
    {
      id: 17,
      question: "UX中的 Von Restorff Effect 讲的是什么?",
      explain:
        "Von Restorff effect, 也称为 'isolation effect', 是关于预测当存在多个相同的刺激时，刺激与另一个不同。 其余的将更有可能被记住。 也就是说，与其他符号不同的符号会被更好地记住。",
      correctAnswer: "区别",
      wrongAnswers: ["复杂", "时间", "距离"],
    },
    {
      id: 18,
      question: "Tesler's Law 在 UX 中的表现如何?",
      explain:
        "Tesler's Law, 也称为 Law of Conservation of Complexity, 指出任何系统都存在一定程度的复杂性，无法降低。 您可以理解，在涉及人机交互时，每个应用程序都具有无法消除或隐藏的固有复杂性，开发人员的工作是确保通过优化显示来降低复杂性。",
      correctAnswer: "复杂",
      wrongAnswers: ["响应时间", "记忆", "距离"],
    },
    {
      id: 19,
      question: "Doherty Threshold 在 UX 中谈什么?",
      explain:
        "Doherty Threshold 由 Walter Doherty 和 Ahrvind Thadani 构想，目标是让用户在与计算机交互时保持充分参与。 根据 70 年代当天晚些时候进行的一项研究，如果在 400 毫秒阈值之后出现响应，最终用户将不再关心。 Doherty threshold 规定在响应系统时间下降到 400 毫秒以下后，用户体验从烦人变为令人上瘾。",
      correctAnswer: "响应时间",
      wrongAnswers: ["记忆", "距离", "尺寸"],
    },
  ],
};
