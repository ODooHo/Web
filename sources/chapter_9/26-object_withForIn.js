﻿    // 객체를 선언합니다.
    var product = {
        제품명: '7D 건조 망고',
        유형: '당절임',
        성분: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
        원산지: '필리핀'
    };

    // 출력합니다.
    for (var i in product) {
        console.log(i + ':' + product[i]);
    }
