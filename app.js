document.getElementById('generateBtn').addEventListener('click', function(e) {
  e.preventDefault();
  let namesPerGroup = parseInt(document.querySelector('.pergroup').value),
      allNames = document.querySelector('textarea').value.split('\n'),
      allNamesLen = allNames.length;

  let numGroups = Math.ceil(allNamesLen / namesPerGroup);

  if (document.querySelector('.numgroups').value) {
      numGroups = parseInt(document.querySelector('.numgroups').value);
      namesPerGroup = allNamesLen / numGroups;
  }

  let groupsContainer = document.querySelector('.groups');
  groupsContainer.innerHTML = '';

  for (let i = 0; i < numGroups; i++) {
      let group = document.createElement('div');
      group.className = 'group';
      group.innerHTML = '<h2>Group ' + (i + 1) + '</h2>';
      groupsContainer.appendChild(group);
  }

  let groups = document.querySelectorAll('.group');
  groups.forEach(function(group) {
      for (let j = 0; j < namesPerGroup; j++) {
          let randNameIndex = Math.floor(Math.random() * allNames.length);
          if (allNames[randNameIndex]) {
              let p = document.createElement('p');
              p.textContent = allNames[randNameIndex];
              group.appendChild(p);
          }
          allNames.splice(randNameIndex, 1);
      }
  });
});

document.querySelector('.toggle-wrap a').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.wrap').classList.toggle('alt');
  document.querySelectorAll('.pergroup-wrap input, .numgroups-wrap input').forEach(function(input) {
      input.value = '';
  });
});
