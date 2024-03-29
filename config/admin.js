
// Khởi tạo dữ liệu

// Admin
let Admin        = require('../app/Models/Admin');
let generateHash = require('../app/Helpers/Helpers').generateHash;
let HU           = require('../app/Models/HU');
let ZeusPercent           = require('../app/Models/Zeus/Zeus_percent');
let TamHungPercent           = require('../app/Models/TamHung/TamHung_percent');

Admin.estimatedDocumentCount().exec(function(err, total){
	if (total == 0) {
		Admin.create({'username': 'huytronglee', 'password': generateHash('123321'), 'rights': 9, 'regDate': new Date()});
	}
})

// Bầu Cua
let BauCua = require('../app/Models/BauCua/BauCua_temp');
BauCua.findOne({}, {}, function(err, data){
	if (!data) {
		BauCua.create({});
	}
})


// thiết lập Hũ Mini Poker
// red
HU.findOne({game:'minipoker', type:100, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'minipoker', 'type': 100, red: true, 'bet': 400000, 'min': 400000});
	}
})

HU.findOne({game:'minipoker', type:1000, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'minipoker', 'type': 1000, red: true, 'bet': 4000000, 'min': 4000000});
	}
})

HU.findOne({game:'minipoker', type:10000, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'minipoker', 'type': 10000, red: true, 'bet': 40000000, 'min': 40000000});
	}
})

// xu
HU.findOne({game:'minipoker', type:100, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'minipoker', 'type': 100, red: false, 'bet': 400000, 'min': 400000});
	}
})

HU.findOne({game:'minipoker', type:1000, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'minipoker', 'type': 1000, red: false, 'bet': 4000000, 'min': 4000000});
	}
})

HU.findOne({game:'minipoker', type:10000, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'minipoker', 'type': 10000, red: false, 'bet': 40000000, 'min': 40000000});
	}
})


// thiết lập Hũ BigBabol
// red
HU.findOne({game:'bigbabol', type:100, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'bigbabol', 'type': 100, red: true, 'bet': 500000, 'min': 500000});
	}
})

HU.findOne({game:'bigbabol', type:1000, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'bigbabol', 'type': 1000, red: true, 'bet': 5000000, 'min': 5000000});
	}
})

HU.findOne({game:'bigbabol', type:10000, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'bigbabol', 'type': 10000, red: true, 'bet': 50000000, 'min': 50000000});
	}
})

// xu
HU.findOne({game:'bigbabol', type:100, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'bigbabol', 'type': 100, red: false, 'bet': 500000, 'min': 500000});
	}
})

HU.findOne({game:'bigbabol', type:1000, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'bigbabol', 'type': 1000, red: false, 'bet': 5000000, 'min': 5000000});
	}
})

HU.findOne({game:'bigbabol', type:10000, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'bigbabol', 'type': 10000, red: false, 'bet': 50000000, 'min': 50000000});
	}
})


// thiết lập Hũ Vương Quốc Red
// red
HU.findOne({game:'vuongquocred', type:100, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'vuongquocred', 'type': 100, red: true, 'bet': 500000, 'min': 500000});
	}
})

HU.findOne({game:'vuongquocred', type:1000, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'vuongquocred', 'type': 1000, red: true, 'bet': 5000000, 'min': 5000000});
	}
})

HU.findOne({game:'vuongquocred', type:10000, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'vuongquocred', 'type': 10000, red: true, 'bet': 50000000, 'min': 50000000});
	}
})

// xu
HU.findOne({game:'vuongquocred', type:100, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'vuongquocred', 'type': 100, red: false, 'bet': 500000, 'min': 500000});
	}
})

HU.findOne({game:'vuongquocred', type:1000, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'vuongquocred', 'type': 1000, red: false, 'bet': 5000000, 'min': 5000000});
	}
})

HU.findOne({game:'vuongquocred', type:10000, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'vuongquocred', 'type': 10000, red: false, 'bet': 50000000, 'min': 50000000});
	}
})



// thiết lập Hũ Mini 3Cây
// red
HU.findOne({game:'mini3cay', type:100, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'mini3cay', 'type': 100, red: true, 'bet': 250000, 'min': 250000});
	}
})

HU.findOne({game:'mini3cay', type:1000, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'mini3cay', 'type': 1000, red: true, 'bet': 2500000, 'min': 2500000});
	}
})

HU.findOne({game:'mini3cay', type:10000, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'mini3cay', 'type': 10000, red: true, 'bet': 25000000, 'min': 25000000});
	}
})

// xu
HU.findOne({game:'mini3cay', type:100, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'mini3cay', 'type': 100, red: false, 'bet': 250000, 'min': 250000});
	}
})

HU.findOne({game:'mini3cay', type:1000, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'mini3cay', 'type': 1000, red: false, 'bet': 2500000, 'min': 2500000});
	}
})

HU.findOne({game:'mini3cay', type:10000, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'mini3cay', 'type': 10000, red: false, 'bet': 25000000, 'min': 25000000});
	}
})


// thiết lập Hũ Cao Thấp
// red
HU.findOne({game:'caothap', type:1000, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'caothap', 'type': 1000, red: true, 'bet': 7000, 'min': 7000});
	}
})

HU.findOne({game:'caothap', type:10000, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'caothap', 'type': 10000, red: true, 'bet': 70000, 'min': 70000});
	}
})

HU.findOne({game:'caothap', type:50000, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'caothap', 'type': 50000, red: true, 'bet': 350000, 'min': 350000});
	}
})

HU.findOne({game:'caothap', type:100000, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'caothap', 'type': 100000, red: true, 'bet': 700000, 'min': 700000});
	}
})

HU.findOne({game:'caothap', type:500000, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'caothap', 'type': 500000, red: true, 'bet': 3500000, 'min': 3500000});
	}
})

// xu
HU.findOne({game:'caothap', type:1000, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'caothap', 'type': 1000, red: false, 'bet': 7000, 'min': 7000});
	}
})

HU.findOne({game:'caothap', type:10000, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'caothap', 'type': 10000, red: false, 'bet': 70000, 'min': 70000});
	}
})

HU.findOne({game:'caothap', type:50000, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'caothap', 'type': 50000, red: false, 'bet': 350000, 'min': 350000});
	}
})

HU.findOne({game:'caothap', type:100000, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'caothap', 'type': 100000, red: false, 'bet': 700000, 'min': 700000});
	}
})

HU.findOne({game:'caothap', type:500000, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'caothap', 'type': 500000, red: false, 'bet': 3500000, 'min': 3500000});
	}
})


// thiết lập Hũ AngryBirds
// red
HU.findOne({game:'arb', type:100, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'arb', 'type': 100, red: true, 'bet': 500000, 'min': 500000});
	}
})

HU.findOne({game:'arb', type:1000, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'arb', 'type': 1000, red: true, 'bet': 5000000, 'min': 5000000});
	}
})

HU.findOne({game:'arb', type:10000, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'arb', 'type': 10000, red: true, 'bet': 50000000, 'min': 50000000});
	}
})

// xu
HU.findOne({game:'arb', type:100, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'arb', 'type': 100, red: false, 'bet': 500000, 'min': 500000});
	}
})

HU.findOne({game:'arb', type:1000, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'arb', 'type': 1000, red: false, 'bet': 5000000, 'min': 5000000});
	}
})

HU.findOne({game:'arb', type:10000, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'arb', 'type': 10000, red: false, 'bet': 50000000, 'min': 50000000});
	}
})


// thiết lập Hũ Candy
// red
HU.findOne({game:'candy', type:100, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'candy', 'type': 100, red: true, 'bet': 500000, 'min': 500000});
	}
})

HU.findOne({game:'candy', type:1000, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'candy', 'type': 1000, red: true, 'bet': 5000000, 'min': 5000000});
	}
})

HU.findOne({game:'candy', type:10000, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'candy', 'type': 10000, red: true, 'bet': 50000000, 'min': 50000000});
	}
})

// xu
HU.findOne({game:'candy', type:100, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'candy', 'type': 100, red: false, 'bet': 500000, 'min': 500000});
	}
})

HU.findOne({game:'candy', type:1000, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'candy', 'type': 1000, red: false, 'bet': 5000000, 'min': 5000000});
	}
})

HU.findOne({game:'candy', type:10000, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'candy', 'type': 10000, red: false, 'bet': 50000000, 'min': 50000000});
	}
})

// thiết lập Hũ Long Lân
// red
HU.findOne({game:'long', type:100, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'long', 'type': 100, red: true, 'bet': 500000, 'min': 500000});
	}
})

HU.findOne({game:'long', type:1000, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'long', 'type': 1000, red: true, 'bet': 5000000, 'min': 5000000});
	}
})

HU.findOne({game:'long', type:10000, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'long', 'type': 10000, red: true, 'bet': 50000000, 'min': 50000000});
	}
})


// xu
HU.findOne({game:'long', type:100, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'long', 'type': 100, red: false, 'bet': 500000, 'min': 500000});
	}
})

HU.findOne({game:'long', type:1000, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'long', 'type': 1000, red: false, 'bet': 5000000, 'min': 5000000});
	}
})

HU.findOne({game:'long', type:10000, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'long', 'type': 10000, red: false, 'bet': 50000000, 'min': 50000000});
	}
})
// thiết lập Hũ Zeus
// red
HU.findOne({game:'Zeus', type:100, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'Zeus', 'type': 100, red: true, 'bet': 500000, 'min': 500000});
	}
})

HU.findOne({game:'Zeus', type:1000, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'Zeus', 'type': 1000, red: true, 'bet': 5000000, 'min': 5000000});
	}
})

HU.findOne({game:'Zeus', type:10000, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'Zeus', 'type': 10000, red: true, 'bet': 50000000, 'min': 50000000});
	}
})


// xu
HU.findOne({game:'Zeus', type:100, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'Zeus', 'type': 100, red: false, 'bet': 500000, 'min': 500000});
	}
})

HU.findOne({game:'Zeus', type:1000, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'Zeus', 'type': 1000, red: false, 'bet': 5000000, 'min': 5000000});
	}
})

HU.findOne({game:'Zeus', type:10000, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'Zeus', 'type': 10000, red: false, 'bet': 50000000, 'min': 50000000});
	}
})

// thiết lập Hũ Vương Quốc Red
// red
HU.findOne({game:'tamhung', type:100, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'tamhung', 'type': 100, red: true, 'bet': 500000, 'min': 500000});
	}
})

HU.findOne({game:'tamhung', type:1000, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'tamhung', 'type': 1000, red: true, 'bet': 5000000, 'min': 5000000});
	}
})

HU.findOne({game:'tamhung', type:10000, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'tamhung', 'type': 10000, red: true, 'bet': 50000000, 'min': 50000000});
	}
})

// xu
HU.findOne({game:'tamhung', type:100, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'tamhung', 'type': 100, red: false, 'bet': 500000, 'min': 500000});
	}
})

HU.findOne({game:'tamhung', type:1000, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'tamhung', 'type': 1000, red: false, 'bet': 5000000, 'min': 5000000});
	}
})

HU.findOne({game:'tamhung', type:10000, red: false}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'tamhung', 'type': 10000, red: false, 'bet': 50000000, 'min': 50000000});
	}
})

// thiết lập Hũ MegaJackpot
// red
HU.findOne({game:'megaj', type:100, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'megaj', 'type': 100, red: true, 'bet': 5000000, 'min': 5000000});
	}
})

HU.findOne({game:'megaj', type:1000, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'megaj', 'type': 1000, red: true, 'bet': 50000000, 'min': 50000000});
	}
})

HU.findOne({game:'megaj', type:10000, red: true}, {}, function(err, data){
	if (!data) {
		HU.create({'game':'megaj', 'type': 10000, red: true, 'bet': 200000000, 'min': 200000000});
	}
})

ZeusPercent.findOne({type:100},function(err,data){
	if(!data){
		ZeusPercent.create({'type':100,'item0':300,'item1':200,'item2':100,'item3':80,'item4':80,'item5':80,'item6':80,'item7':35,'item8':35,'item9':5,'item10':5,})
	}
})
ZeusPercent.findOne({type:1000},function(err,data){
	if(!data){
		ZeusPercent.create({'type':1000,'item0':300,'item1':200,'item2':100,'item3':80,'item4':80,'item5':80,'item6':80,'item7':35,'item8':35,'item9':5,'item10':5,})
	}
})
ZeusPercent.findOne({type:10000},function(err,data){
	if(!data){
		ZeusPercent.create({'type':10000,'item0':300,'item1':200,'item2':100,'item3':80,'item4':80,'item5':80,'item6':80,'item7':35,'item8':35,'item9':5,'item10':5,})
	}
})
TamHungPercent.findOne({type:100},function(err,data){
	if(!data){
			TamHungPercent.create({'type':100,'item0':400,'item1':300,'item2':200,'item3':90,'item4':10,'item5':5,'item6':5})
	}
})
TamHungPercent.findOne({type:1000},function(err,data){
	if(!data){
		TamHungPercent.create({'type':1000,'item0':400,'item1':300,'item2':200,'item3':90,'item4':10,'item5':5,'item6':5})
	}
})
TamHungPercent.findOne({type:10000},function(err,data){
	if(!data){
		TamHungPercent.create({'type':10000,'item0':400,'item1':300,'item2':200,'item3':90,'item4':10,'item5':5,'item6':5})
	}
})
