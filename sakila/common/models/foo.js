db.Film.group({
    initial: {count: 0},
    reduce: function(result) {count++},
    key: 'language_id'
})

select f.language_id,count(*)
from film f
group by f.language_id

[
    {
        languageId: 5,
        count: 78
    },
    {
        languageId: 10,
        count: 120
    },
]