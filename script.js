
const students = [
    {
      "Nomor Peserta": "T1-26-05-11-0484-0001-8",
      "NISN": "3133617583",
      "Nama Peserta": "DEWI ROKHMATUN NAJWA",
      "Tempat, Tanggal Lahir": "JOMBANG, 4 Juli 2013",
      "Matematika": "60.00\n(Baik)",
      "Bahasa Indonesia": "76.67\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0002-7",
      "NISN": "0132135745",
      "Nama Peserta": "KEANU ALBERT SEMBIRING MELIALA",
      "Tempat, Tanggal Lahir": "Sidoarjo, 22 November 2013",
      "Matematika": "46.67\n(Memadai)",
      "Bahasa Indonesia": "60.00\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0003-6",
      "NISN": "0132252759",
      "Nama Peserta": "ARINI NAZWA PUTRI",
      "Tempat, Tanggal Lahir": "Sidoarjo, 13 September 2013",
      "Matematika": "70.00\n(Baik)",
      "Bahasa Indonesia": "96.67\n(Baik - Istimewa)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0004-5",
      "NISN": "3139209410",
      "Nama Peserta": "AQILLA CANTIKA MAHARANI",
      "Tempat, Tanggal Lahir": "NGANJUK, 10 Mei 2013",
      "Matematika": "63.33\n(Baik)",
      "Bahasa Indonesia": "76.67\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0005-4",
      "NISN": "3130774715",
      "Nama Peserta": "ABELIA KHALISHA PUTRI",
      "Tempat, Tanggal Lahir": "PEKANBARU, 23 November 2013",
      "Matematika": "23.33\n(Kurang)",
      "Bahasa Indonesia": "63.33\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0006-3",
      "NISN": "0144965890",
      "Nama Peserta": "DZAKIRA AFTANIA FIRLY",
      "Tempat, Tanggal Lahir": "Sidoarjo, 31 Januari 2014",
      "Matematika": "40.00\n(Memadai)",
      "Bahasa Indonesia": "83.33\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0007-2",
      "NISN": "0131828692",
      "Nama Peserta": "UFAIRA NUR AFIFA WINARDIATNA",
      "Tempat, Tanggal Lahir": "Sidoarjo, 28 Agustus 2013",
      "Matematika": "53.33\n(Memadai)",
      "Bahasa Indonesia": "76.67\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0008-9",
      "NISN": "3134329277",
      "Nama Peserta": "PUTRA YUDHA SETIAWAN",
      "Tempat, Tanggal Lahir": "NGAWI, 13 Agustus 2013",
      "Matematika": "60.00\n(Baik)",
      "Bahasa Indonesia": "53.33\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0009-8",
      "NISN": "3130629425",
      "Nama Peserta": "MOHAMMAD ARAFA",
      "Tempat, Tanggal Lahir": "SAMPANG, 29 September 2013",
      "Matematika": "50.00\n(Memadai)",
      "Bahasa Indonesia": "73.33\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0010-7",
      "NISN": "0139550085",
      "Nama Peserta": "KHANSA KANAYA PUTRI",
      "Tempat, Tanggal Lahir": "SIDOARJO, 8 Juni 2013",
      "Matematika": "70.00\n(Baik)",
      "Bahasa Indonesia": "80.00\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0011-6",
      "NISN": "0131614960",
      "Nama Peserta": "BELVANIA CINTA KIRANA GONI",
      "Tempat, Tanggal Lahir": "SURABAYA, 22 Oktober 2013",
      "Matematika": "73.33\n(Baik)",
      "Bahasa Indonesia": "90.00\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0012-5",
      "NISN": "0146232824",
      "Nama Peserta": "RAFI ABHAR WIBOWO",
      "Tempat, Tanggal Lahir": "Sidoarjo, 12 Februari 2014",
      "Matematika": "46.67\n(Memadai)",
      "Bahasa Indonesia": "56.67\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0013-4",
      "NISN": "3130940204",
      "Nama Peserta": "Faeyza Ragvi Kusuma",
      "Tempat, Tanggal Lahir": "Sidoarjo, 29 September 2013",
      "Matematika": "70.00\n(Baik)",
      "Bahasa Indonesia": "83.33\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0014-3",
      "NISN": "3135802225",
      "Nama Peserta": "AQILLA PUTRI NUR OKTAVIA",
      "Tempat, Tanggal Lahir": "NGAWI, 4 Oktober 2013",
      "Matematika": "43.33\n(Memadai)",
      "Bahasa Indonesia": "70.00\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0015-2",
      "NISN": "0137206252",
      "Nama Peserta": "FIRMAN ALAM'SYAH",
      "Tempat, Tanggal Lahir": "SURABAYA, 10 Mei 2013",
      "Matematika": "36.67\n(Memadai)",
      "Bahasa Indonesia": "23.33\n(Kurang)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0016-9",
      "NISN": "3130353524",
      "Nama Peserta": "MUHAMMAD YAFI SAPUTRA",
      "Tempat, Tanggal Lahir": "SIDOARJO, 2 November 2013",
      "Matematika": "50.00\n(Memadai)",
      "Bahasa Indonesia": "76.67\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0017-8",
      "NISN": "0134705637",
      "Nama Peserta": "NURIL ABIDAH",
      "Tempat, Tanggal Lahir": "SIDOARJO, 28 November 2013",
      "Matematika": "50.00\n(Memadai)",
      "Bahasa Indonesia": "63.33\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0018-7",
      "NISN": "0136950855",
      "Nama Peserta": "KANZA ATIQA PUTRI",
      "Tempat, Tanggal Lahir": "SIDOARJO, 30 Agustus 2013",
      "Matematika": "83.33\n(Baik)",
      "Bahasa Indonesia": "86.67\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0019-6",
      "NISN": "0134498794",
      "Nama Peserta": "ANGGA SETIAWAN",
      "Tempat, Tanggal Lahir": "MALANG, 15 April 2013",
      "Matematika": "26.67\n(Kurang)",
      "Bahasa Indonesia": "33.33\n(Kurang)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0020-5",
      "NISN": "3137732180",
      "Nama Peserta": "REIHANZ DWI ALFARIZI",
      "Tempat, Tanggal Lahir": "SIDOARJO, 18 November 2013",
      "Matematika": "46.67\n(Memadai)",
      "Bahasa Indonesia": "60.00\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0021-4",
      "NISN": "0142784441",
      "Nama Peserta": "ARIKA RIFA FAHMIA",
      "Tempat, Tanggal Lahir": "SIDOARJO, 18 Februari 2014",
      "Matematika": "40.00\n(Memadai)",
      "Bahasa Indonesia": "56.67\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0022-3",
      "NISN": "0136339176",
      "Nama Peserta": "MU'AZZAM NICHOLAS DEWANGGA",
      "Tempat, Tanggal Lahir": "Sidoarjo, 15 Juni 2013",
      "Matematika": "50.00\n(Memadai)",
      "Bahasa Indonesia": "53.33\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0023-2",
      "NISN": "0147783366",
      "Nama Peserta": "Cahaya Melfa Irawan",
      "Tempat, Tanggal Lahir": "Dumai, 3 Januari 2014",
      "Matematika": "53.33\n(Memadai)",
      "Bahasa Indonesia": "66.67\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0024-9",
      "NISN": "0121304846",
      "Nama Peserta": "ANANDA MUHAMMAD LUTFI HABIBULLAH",
      "Tempat, Tanggal Lahir": "SAMPANG, 20 November 2012",
      "Matematika": "40.00\n(Memadai)",
      "Bahasa Indonesia": "56.67\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0025-8",
      "NISN": "0137366312",
      "Nama Peserta": "MUHAMMAD RAFI ABDILLAH",
      "Tempat, Tanggal Lahir": "Sidoarjo, 16 April 2013",
      "Matematika": "70.00\n(Baik)",
      "Bahasa Indonesia": "93.33\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0026-7",
      "NISN": "0133160611",
      "Nama Peserta": "KHAIRA NAJWA ADIFAH",
      "Tempat, Tanggal Lahir": "Sidoarjo, 25 Juni 2013",
      "Matematika": "43.33\n(Memadai)",
      "Bahasa Indonesia": "60.00\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0027-6",
      "NISN": "3133630896",
      "Nama Peserta": "INDANA LAZULFA",
      "Tempat, Tanggal Lahir": "SIDOARJO, 15 Mei 2013",
      "Matematika": "43.33\n(Memadai)",
      "Bahasa Indonesia": "70.00\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0028-5",
      "NISN": "0143740707",
      "Nama Peserta": "LEYNA AURELIA EVELYN",
      "Tempat, Tanggal Lahir": "SIDOARJO, 12 Januari 2014",
      "Matematika": "46.67\n(Memadai)",
      "Bahasa Indonesia": "70.00\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0029-4",
      "NISN": "3132646690",
      "Nama Peserta": "AFIKA AL KHANZA ARSANDY",
      "Tempat, Tanggal Lahir": "SIDOARJO, 30 November 2013",
      "Matematika": "60.00\n(Baik)",
      "Bahasa Indonesia": "73.33\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0030-3",
      "NISN": "3136941228",
      "Nama Peserta": "MUHAMMAD RAFA PRATAMA",
      "Tempat, Tanggal Lahir": "SIDOARJO, 6 April 2013",
      "Matematika": "36.67\n(Memadai)",
      "Bahasa Indonesia": "53.33\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0031-2",
      "NISN": "0139166285",
      "Nama Peserta": "AKIKO AULIA RIVIERA DION",
      "Tempat, Tanggal Lahir": "Grobogan, 24 Mei 2013",
      "Matematika": "40.00\n(Memadai)",
      "Bahasa Indonesia": "83.33\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0032-9",
      "NISN": "3136288433",
      "Nama Peserta": "AL RSIA IBRAHIM AMATA",
      "Tempat, Tanggal Lahir": "SIDOARJO, 13 Juni 2013",
      "Matematika": "33.33\n(Memadai)",
      "Bahasa Indonesia": "63.33\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0033-8",
      "NISN": "3149585122",
      "Nama Peserta": "YOCHELIN REGINA NATHANIA",
      "Tempat, Tanggal Lahir": "SIDOARJO, 10 Juni 2014",
      "Matematika": "26.67\n(Kurang)",
      "Bahasa Indonesia": "33.33\n(Kurang)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0034-7",
      "NISN": "3136720592",
      "Nama Peserta": "AZAHRA BALQIS HABIBAH",
      "Tempat, Tanggal Lahir": "PASURUAN, 15 September 2013",
      "Matematika": "33.33\n(Memadai)",
      "Bahasa Indonesia": "50.00\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0035-6",
      "NISN": "3138636680",
      "Nama Peserta": "NAURA PUTRI EDYKA",
      "Tempat, Tanggal Lahir": "MOJOKERTO, 15 Desember 2013",
      "Matematika": "53.33\n(Memadai)",
      "Bahasa Indonesia": "76.67\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0036-5",
      "NISN": "3134190325",
      "Nama Peserta": "MUHAMMAD ILHAM HUSAIN",
      "Tempat, Tanggal Lahir": "SIDOARJO, 11 Oktober 2013",
      "Matematika": "53.33\n(Memadai)",
      "Bahasa Indonesia": "70.00\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0037-4",
      "NISN": "0147043696",
      "Nama Peserta": "AZZAHRA ASYILLA RAHMA",
      "Tempat, Tanggal Lahir": "SIDOARJO, 27 April 2014",
      "Matematika": "43.33\n(Memadai)",
      "Bahasa Indonesia": "70.00\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0038-3",
      "NISN": "0131272796",
      "Nama Peserta": "AL ZENA NIMAS HAYYU PURNOMO",
      "Tempat, Tanggal Lahir": "Magetan, 18 November 2013",
      "Matematika": "56.67\n(Baik)",
      "Bahasa Indonesia": "83.33\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0039-2",
      "NISN": "0133911851",
      "Nama Peserta": "IFTINA ASSYABIYA RAFIFA",
      "Tempat, Tanggal Lahir": "Sidoarjo, 31 Juli 2013",
      "Matematika": "63.33\n(Baik)",
      "Bahasa Indonesia": "93.33\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0040-9",
      "NISN": "0143395077",
      "Nama Peserta": "Rifqi Dzakwan Maulana",
      "Tempat, Tanggal Lahir": "Jakarta, 31 Januari 2014",
      "Matematika": "66.67\n(Baik)",
      "Bahasa Indonesia": "83.33\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0041-8",
      "NISN": "0146362412",
      "Nama Peserta": "Anindha Marta Listuhayu Firmansyah",
      "Tempat, Tanggal Lahir": "Sidoarjo, 21 Januari 2014",
      "Matematika": "36.67\n(Memadai)",
      "Bahasa Indonesia": "66.67\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0042-7",
      "NISN": "3132979851",
      "Nama Peserta": "MUHAMMAD NAKHLA RAFANDRA",
      "Tempat, Tanggal Lahir": "SIDOARJO, 22 Oktober 2013",
      "Matematika": "46.67\n(Memadai)",
      "Bahasa Indonesia": "76.67\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0043-6",
      "NISN": "3145023964",
      "Nama Peserta": "DHEANITA AYUNDA FEBRIANA",
      "Tempat, Tanggal Lahir": "BANJAR, 21 Februari 2014",
      "Matematika": "40.00\n(Memadai)",
      "Bahasa Indonesia": "66.67\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0044-5",
      "NISN": "3139996419",
      "Nama Peserta": "MOCHAMAD FAHIM MANAN PRAYATA",
      "Tempat, Tanggal Lahir": "NGANJUK, 11 April 2013",
      "Matematika": "43.33\n(Memadai)",
      "Bahasa Indonesia": "90.00\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0045-4",
      "NISN": "3132481290",
      "Nama Peserta": "FIDZA FATIH AL FAZARI IRATNA",
      "Tempat, Tanggal Lahir": "SIDOARJO, 20 Maret 2013",
      "Matematika": "63.33\n(Baik)",
      "Bahasa Indonesia": "73.33\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0046-3",
      "NISN": "3133822291",
      "Nama Peserta": "SOFFY MAHARANI PUTRI",
      "Tempat, Tanggal Lahir": "SIDOARJO, 4 Juli 2013",
      "Matematika": "46.67\n(Memadai)",
      "Bahasa Indonesia": "83.33\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0047-2",
      "NISN": "3140779164",
      "Nama Peserta": "JANITRA CIKAL WALUYO",
      "Tempat, Tanggal Lahir": "SIDOARJO, 28 April 2014",
      "Matematika": "30.00\n(Kurang)",
      "Bahasa Indonesia": "83.33\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0048-9",
      "NISN": "3139879786",
      "Nama Peserta": "MOCHAMMAD DEYGO PUTRA SAIFUL",
      "Tempat, Tanggal Lahir": "SIDOARJO, 18 Mei 2013",
      "Matematika": "53.33\n(Memadai)",
      "Bahasa Indonesia": "83.33\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0049-8",
      "NISN": "0144534548",
      "Nama Peserta": "MUHAMMAD RAFI BAKHTIAR SEPTIANO",
      "Tempat, Tanggal Lahir": "SIDOARJO, 24 September 2013",
      "Matematika": "56.67\n(Baik)",
      "Bahasa Indonesia": "93.33\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0050-7",
      "NISN": "0131888293",
      "Nama Peserta": "MUHAMMAD FAHRISAL RADITYA",
      "Tempat, Tanggal Lahir": "SURABAYA, 3 Juni 2013",
      "Matematika": "33.33\n(Memadai)",
      "Bahasa Indonesia": "70.00\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0051-6",
      "NISN": "3134806769",
      "Nama Peserta": "ALVARO OKTAFIAN GUNAWAN",
      "Tempat, Tanggal Lahir": "SIDOARJO, 26 Oktober 2013",
      "Matematika": "56.67\n(Baik)",
      "Bahasa Indonesia": "86.67\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0052-5",
      "NISN": "3144324926",
      "Nama Peserta": "ARJUNA RAYYAN ARDANI",
      "Tempat, Tanggal Lahir": "SIDOARJO, 11 Mei 2014",
      "Matematika": "30.00\n(Kurang)",
      "Bahasa Indonesia": "66.67\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0053-4",
      "NISN": "0145652200",
      "Nama Peserta": "AISHA ALVIANI KHARISTA",
      "Tempat, Tanggal Lahir": "SIDOARJO, 22 Februari 2014",
      "Matematika": "53.33\n(Memadai)",
      "Bahasa Indonesia": "90.00\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0054-3",
      "NISN": "0138042091",
      "Nama Peserta": "ANDRA MURTADHO",
      "Tempat, Tanggal Lahir": "SIDOARJO, 19 Mei 2013",
      "Matematika": "20.00\n(Kurang)",
      "Bahasa Indonesia": "53.33\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0055-2",
      "NISN": "0139870062",
      "Nama Peserta": "WISNU TOMY CHARISTYAWAN",
      "Tempat, Tanggal Lahir": "Sidoarjo, 15 Agustus 2013",
      "Matematika": "30.00\n(Kurang)",
      "Bahasa Indonesia": "73.33\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0056-9",
      "NISN": "3134765675",
      "Nama Peserta": "AFIKHA DWI ARIYANTI",
      "Tempat, Tanggal Lahir": "SAMPANG, 12 April 2013",
      "Matematika": "60.00\n(Baik)",
      "Bahasa Indonesia": "63.33\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0057-8",
      "NISN": "3134833611",
      "Nama Peserta": "SHEYNA AULIA ADARA PUTRI AGGASI",
      "Tempat, Tanggal Lahir": "SIDOARJO, 21 Desember 2013",
      "Matematika": "23.33\n(Kurang)",
      "Bahasa Indonesia": "33.33\n(Kurang)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0058-7",
      "NISN": "0147002872",
      "Nama Peserta": "AHMAD RENDY FEBRIANSYAH",
      "Tempat, Tanggal Lahir": "LAMONGAN, 9 Februari 2014",
      "Matematika": "30.00\n(Kurang)",
      "Bahasa Indonesia": "36.67\n(Kurang)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0059-6",
      "NISN": "3146253773",
      "Nama Peserta": "FELHISYA ATHAYA F",
      "Tempat, Tanggal Lahir": "Tasikmalaya, 15 Januari 2014",
      "Matematika": "63.33\n(Baik)",
      "Bahasa Indonesia": "76.67\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0060-5",
      "NISN": "3131204683",
      "Nama Peserta": "DURRIYA NAILA TALITA",
      "Tempat, Tanggal Lahir": "JOMBANG, 12 Juni 2013",
      "Matematika": "40.00\n(Memadai)",
      "Bahasa Indonesia": "76.67\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0061-4",
      "NISN": "0139369905",
      "Nama Peserta": "MUHAMMAD FAHRISAL ADITYA",
      "Tempat, Tanggal Lahir": "SURABAYA, 3 Juni 2013",
      "Matematika": "56.67\n(Baik)",
      "Bahasa Indonesia": "83.33\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0062-3",
      "NISN": "0135950037",
      "Nama Peserta": "MELLANY PERMATA FINTARSIH",
      "Tempat, Tanggal Lahir": "SIDOARJO, 12 November 2013",
      "Matematika": "36.67\n(Memadai)",
      "Bahasa Indonesia": "63.33\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0063-2",
      "NISN": "3136603271",
      "Nama Peserta": "MAHARDIKA AZ ZIKRI HERFANO",
      "Tempat, Tanggal Lahir": "PROBOLINGGO, 30 Desember 2013",
      "Matematika": "36.67\n(Memadai)",
      "Bahasa Indonesia": "26.67\n(Kurang)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0064-9",
      "NISN": "0139479801",
      "Nama Peserta": "AYLA OKTAVIA",
      "Tempat, Tanggal Lahir": "SIDOARJO, 12 Oktober 2013",
      "Matematika": "40.00\n(Memadai)",
      "Bahasa Indonesia": "60.00\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0065-8",
      "NISN": "0139698989",
      "Nama Peserta": "AZZAHRA EVOLUNA LATIFA",
      "Tempat, Tanggal Lahir": "SIDOARJO, 2 April 2013",
      "Matematika": "60.00\n(Baik)",
      "Bahasa Indonesia": "73.33\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0066-7",
      "NISN": "0133115367",
      "Nama Peserta": "LAILA FAIHA RAMADHANIA",
      "Tempat, Tanggal Lahir": "SIDOARJO, 6 Agustus 2013",
      "Matematika": "50.00\n(Memadai)",
      "Bahasa Indonesia": "83.33\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0067-6",
      "NISN": "3130408439",
      "Nama Peserta": "NABILA PUTRI AZZAHRA",
      "Tempat, Tanggal Lahir": "SIDOARJO, 20 Maret 2013",
      "Matematika": "53.33\n(Memadai)",
      "Bahasa Indonesia": "63.33\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0068-5",
      "NISN": "3148002120",
      "Nama Peserta": "AZZAM MUFID PUTRA WIDODO",
      "Tempat, Tanggal Lahir": "SIDOARJO, 13 April 2014",
      "Matematika": "56.67\n(Baik)",
      "Bahasa Indonesia": "63.33\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0069-4",
      "NISN": "0137465937",
      "Nama Peserta": "DEVINA APRIELYSA",
      "Tempat, Tanggal Lahir": "SIDOARJO, 2 April 2013",
      "Matematika": "33.33\n(Memadai)",
      "Bahasa Indonesia": "50.00\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0070-3",
      "NISN": "3136492609",
      "Nama Peserta": "RAFAEL",
      "Tempat, Tanggal Lahir": "SIDOARJO, 3 April 2011",
      "Matematika": "50.00\n(Memadai)",
      "Bahasa Indonesia": "86.67\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0071-2",
      "NISN": "0136333201",
      "Nama Peserta": "DIAN HAYU KARTIKA",
      "Tempat, Tanggal Lahir": "SIDOARJO, 14 September 2013",
      "Matematika": "43.33\n(Memadai)",
      "Bahasa Indonesia": "70.00\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0072-9",
      "NISN": "0132190137",
      "Nama Peserta": "NI MADE AYU DWI LESTARI PUTRI",
      "Tempat, Tanggal Lahir": "SIDOARJO, 9 Maret 2013",
      "Matematika": "50.00\n(Memadai)",
      "Bahasa Indonesia": "66.67\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0073-8",
      "NISN": "3139548484",
      "Nama Peserta": "MOHAMMAD STEVANO FINZA ASSELO",
      "Tempat, Tanggal Lahir": "SIDOARJO, 19 November 2013",
      "Matematika": "50.00\n(Memadai)",
      "Bahasa Indonesia": "56.67\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0074-7",
      "NISN": "3139241565",
      "Nama Peserta": "DEVIRA ZARIFAH AZ ZAHRA",
      "Tempat, Tanggal Lahir": "SIDOARJO, 17 Juni 2013",
      "Matematika": "70.00\n(Baik)",
      "Bahasa Indonesia": "73.33\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0075-6",
      "NISN": "0131849663",
      "Nama Peserta": "SATRIO JAGAD SETIAWAN",
      "Tempat, Tanggal Lahir": "SIDOARJO, 6 April 2013",
      "Matematika": "53.33\n(Memadai)",
      "Bahasa Indonesia": "60.00\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0076-5",
      "NISN": "3121579333",
      "Nama Peserta": "ADELIA DWI OKTAVIANI",
      "Tempat, Tanggal Lahir": "MAGETAN, 3 Oktober 2013",
      "Matematika": "46.67\n(Memadai)",
      "Bahasa Indonesia": "76.67\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0077-4",
      "NISN": "3130768785",
      "Nama Peserta": "MOCHAMMAD UBAY ALKHAFY",
      "Tempat, Tanggal Lahir": "SIDOARJO, 30 Juli 2013",
      "Matematika": "50.00\n(Memadai)",
      "Bahasa Indonesia": "80.00\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0078-3",
      "NISN": "3131609272",
      "Nama Peserta": "AZIZAH LENNY AZZAHRA",
      "Tempat, Tanggal Lahir": "SIDOARJO, 8 April 2013",
      "Matematika": "60.00\n(Baik)",
      "Bahasa Indonesia": "66.67\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0079-2",
      "NISN": "3135036924",
      "Nama Peserta": "MUHAMMAD FUR'QON NAFIS ROMADHONI",
      "Tempat, Tanggal Lahir": "SIDOARJO, 25 Juli 2013",
      "Matematika": "50.00\n(Memadai)",
      "Bahasa Indonesia": "90.00\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0080-9",
      "NISN": "3138592701",
      "Nama Peserta": "ALFAN ZULFANSYAH",
      "Tempat, Tanggal Lahir": "SIDOARJO, 20 November 2013",
      "Matematika": "56.67\n(Baik)",
      "Bahasa Indonesia": "63.33\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0081-8",
      "NISN": "3131034107",
      "Nama Peserta": "KANSAE ATIARING BENING",
      "Tempat, Tanggal Lahir": "SIDOARJO, 24 Oktober 2013",
      "Matematika": "56.67\n(Baik)",
      "Bahasa Indonesia": "90.00\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0082-7",
      "NISN": "3130924308",
      "Nama Peserta": "QUEEN NOVA CHELSEA AZZAHRA",
      "Tempat, Tanggal Lahir": "SURABAYA, 5 November 2013",
      "Matematika": "50.00\n(Memadai)",
      "Bahasa Indonesia": "90.00\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0083-6",
      "NISN": "3137204131",
      "Nama Peserta": "Nada Farahiyah Putri",
      "Tempat, Tanggal Lahir": "Sidoarjo, 6 Juni 2013",
      "Matematika": "46.67\n(Memadai)",
      "Bahasa Indonesia": "70.00\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0084-5",
      "NISN": "3132158787",
      "Nama Peserta": "ACHMAD LUTHFY RABBANI",
      "Tempat, Tanggal Lahir": "SURABAYA, 20 Mei 2013",
      "Matematika": "40.00\n(Memadai)",
      "Bahasa Indonesia": "76.67\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0085-4",
      "NISN": "0132281126",
      "Nama Peserta": "NOVAL DWI PRASETYO",
      "Tempat, Tanggal Lahir": "SIDOARJO, 15 September 2013",
      "Matematika": "20.00\n(Kurang)",
      "Bahasa Indonesia": "36.67\n(Kurang)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0086-3",
      "NISN": "0142681779",
      "Nama Peserta": "M. GIBRAN ABIZAR ATHARIZZ",
      "Tempat, Tanggal Lahir": "JOMBANG, 29 April 2014",
      "Matematika": "60.00\n(Baik)",
      "Bahasa Indonesia": "83.33\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0087-2",
      "NISN": "0141112643",
      "Nama Peserta": "HAFIZA KHAIRA ROSYDA",
      "Tempat, Tanggal Lahir": "JOMBANG, 3 Januari 2014",
      "Matematika": "50.00\n(Memadai)",
      "Bahasa Indonesia": "76.67\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0088-9",
      "NISN": "3133602044",
      "Nama Peserta": "NARENDRA ALBIAPUTRA WIJAYA",
      "Tempat, Tanggal Lahir": "SIDOARJO, 27 Februari 2013",
      "Matematika": "23.33\n(Kurang)",
      "Bahasa Indonesia": "36.67\n(Kurang)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0089-8",
      "NISN": "3131875226",
      "Nama Peserta": "MUHAMMAD HAIKAL ALFARUQ",
      "Tempat, Tanggal Lahir": "SIDOARJO, 30 Maret 2013",
      "Matematika": "73.33\n(Baik)",
      "Bahasa Indonesia": "70.00\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0090-7",
      "NISN": "0143346833",
      "Nama Peserta": "ZUFAR FATHUL DANISH",
      "Tempat, Tanggal Lahir": "SIDOARJO, 13 April 2014",
      "Matematika": "33.33\n(Memadai)",
      "Bahasa Indonesia": "66.67\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0091-6",
      "NISN": "0132435173",
      "Nama Peserta": "AFIQAH ZAHIRA NAZMI",
      "Tempat, Tanggal Lahir": "SIDOARJO, 8 Juni 2013",
      "Matematika": "53.33\n(Memadai)",
      "Bahasa Indonesia": "33.33\n(Kurang)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0092-5",
      "NISN": "0134697507",
      "Nama Peserta": "CALLISTA YASMINE BRILIANT RHAMADHINA",
      "Tempat, Tanggal Lahir": "Sidoarjo, 23 Juli 2013",
      "Matematika": "53.33\n(Memadai)",
      "Bahasa Indonesia": "80.00\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0093-4",
      "NISN": "0132613071",
      "Nama Peserta": "ANGELITA DEVI SUWANDA",
      "Tempat, Tanggal Lahir": "SIDOARJO, 23 Desember 2013",
      "Matematika": "46.67\n(Memadai)",
      "Bahasa Indonesia": "60.00\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0094-3",
      "NISN": "3139943441",
      "Nama Peserta": "JASMINE AKHYAR PUTRI",
      "Tempat, Tanggal Lahir": "SIDOARJO, 6 November 2013",
      "Matematika": "40.00\n(Memadai)",
      "Bahasa Indonesia": "70.00\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0095-2",
      "NISN": "3132290856",
      "Nama Peserta": "AIRLANGGA BINTANG ADI PRADANA",
      "Tempat, Tanggal Lahir": "MOJOKERTO, 18 Juni 2013",
      "Matematika": "46.67\n(Memadai)",
      "Bahasa Indonesia": "76.67\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0096-9",
      "NISN": "0133207651",
      "Nama Peserta": "BILQIS FELDA ALFARA FAIZAH",
      "Tempat, Tanggal Lahir": "MALANG, 19 Januari 2013",
      "Matematika": "56.67\n(Baik)",
      "Bahasa Indonesia": "83.33\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0097-8",
      "NISN": "0136132184",
      "Nama Peserta": "Adibah Khanza Fitria Az-Zahra",
      "Tempat, Tanggal Lahir": "Sidoarjo, 9 Agustus 2013",
      "Matematika": "30.00\n(Kurang)",
      "Bahasa Indonesia": "60.00\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0098-7",
      "NISN": "0134077925",
      "Nama Peserta": "Naufal Alkhalifi Hariadi",
      "Tempat, Tanggal Lahir": "Malang, 20 November 2013",
      "Matematika": "66.67\n(Baik)",
      "Bahasa Indonesia": "93.33\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0099-6",
      "NISN": "3139391507",
      "Nama Peserta": "JIBRAN GANENDRA WIBOWO",
      "Tempat, Tanggal Lahir": "SITUBONDO, 21 Juni 2013",
      "Matematika": "53.33\n(Memadai)",
      "Bahasa Indonesia": "80.00\n(Baik)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0100-5",
      "NISN": "0137167953",
      "Nama Peserta": "MOCHAMAD RENDY SYAHPUTRA",
      "Tempat, Tanggal Lahir": "SIDOARJO, 8 Juli 2013",
      "Matematika": "36.67\n(Memadai)",
      "Bahasa Indonesia": "46.67\n(Kurang)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0101-4",
      "NISN": "3138246560",
      "Nama Peserta": "SYAFIYAH AQILA KIRANA",
      "Tempat, Tanggal Lahir": "SIDOARJO, 3 Agustus 2013",
      "Matematika": "40.00\n(Memadai)",
      "Bahasa Indonesia": "56.67\n(Memadai)"
    },
    {
      "Nomor Peserta": "T1-26-05-11-0484-0102-3",
      "NISN": "0131937926",
      "Nama Peserta": "VAREL ADITYA PRATAMA",
      "Tempat, Tanggal Lahir": "Gresik, 16 Mei 2013",
      "Matematika": "40.00\n(Memadai)",
      "Bahasa Indonesia": "63.33\n(Memadai)"
    }
  ]
  
/* NORMALIZE */
function normalizeText(text){
  return text
    .trim()
    .toLowerCase()
    .replace(/\s+/g,' ');
}

/* CEK HASIL */
function cekHasil(){

  const namaInput = normalizeText(
    document.getElementById("nama").value
  );

  let nisnInput = document
    .getElementById("nisn")
    .value
    .trim();

  // aman jika ada 0 di depan
  nisnInput = nisnInput.padStart(10,'0');

  // cari berdasarkan NISN
  const siswa = students.find(s =>
    String(s["NISN"]).padStart(10,'0') === nisnInput
  );

  if(siswa){

    // validasi nama (lebih fleksibel)
    const namaData = normalizeText(
      siswa["Nama Peserta"]
    );

    // jika nama tidak mirip
    if(!namaData.includes(namaInput) && namaInput !== ""){
      document.getElementById("notFound").style.display =
        "block";

      document.getElementById("notFound").innerText =
        "Nama peserta tidak sesuai dengan NISN";

      return;
    }

    // isi hasil
    document.getElementById("hasilNama").textContent =
      siswa["Nama Peserta"];

    document.getElementById("hasilNo").textContent =
      siswa["Nomor Peserta"];

    document.getElementById("hasilNisn").textContent =
      siswa["NISN"];

    document.getElementById("hasilTTL").textContent =
      siswa["Tempat, Tanggal Lahir"];

    document.getElementById("hasilMtk").textContent =
      siswa["Matematika"];

    document.getElementById("hasilBindo").textContent =
      siswa["Bahasa Indonesia"];

    // tampilkan hasil
    document.getElementById("resultPage").style.display =
      "block";

    // sembunyikan notif
    document.getElementById("notFound").style.display =
      "none";

  }else{

    document.getElementById("notFound").style.display =
      "block";

    document.getElementById("notFound").innerText =
      "Data tidak ditemukan";
  }
}

/* KEMBALI */
function kembali(){

  document.getElementById("resultPage").style.display =
    "none";
}