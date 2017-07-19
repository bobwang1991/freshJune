var ReturnDataConstans = {
    "code": {
        "STATUS_OK": 0,
        "STATUS_ERR_COMMON_FAIL": 1,
        "STATUS_ERR_LOGINFAIL": 2,
        "STATUS_ERR_CAPTCHA_CODE": 3,

        "STATUS_ERR_SYSTEMERROR": 500,
        "STATUS_ERR_UN_AUTHC": 101,
        "STATUS_ERR_UN_AUTHZ": 102,
        "STATUS_ERR_PARA_MISS": 201,
        "STATUS_ERR_PARA_INVALID": 202,
        "STATUS_ERR_BIZ_NORECORD": 301,
        "STATUS_ERR_BIZ_EXISTRECORD":302
    }

};

var common = {
    tips: function (data) {
        layer.open({
            content: data,
            style: 'background-color:#fff; color:#7C7C7C; border:none;',
            time: 1
        });
    },
    checkMobile: function (mobile) {
        var reg = /^1[0-9]{10}$/;
        return reg.test(mobile);
    }


};